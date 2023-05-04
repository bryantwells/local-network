import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import { IcecastService } from "./modules/IcecastService.js"

// ENV
const ICECAST_HOSTNAME = process.env.ICECAST_HOSTNAME || 'radio-server';
const ICECAST_PORT = process.env.ICECAST_PORT || 8000;
const ICECAST_ADMIN_USER = process.env.ICECAST_ADMIN_USER || 'admin';
const ICECAST_ADMIN_PASS = process.env.ICECAST_ADMIN_PASS || 'hackme';
const ICECAST_SOURCE_PASS = process.env.ICECAST_SOURCE_PASS || 'hackme';

// Create app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create server
const server = createServer(app);

// Create socket
const io = new Server(server, {
	cors: { origin: '*' },
});

// Create icecast service
const icecastService = new IcecastService(
    ICECAST_HOSTNAME,
    ICECAST_PORT,
    ICECAST_ADMIN_USER,
    ICECAST_ADMIN_PASS,
    ICECAST_SOURCE_PASS
);
await icecastService.init();

// Kill any extra sources
await icecastService.killAllSources();

// Handle GET reqquest
app.get('/stats', (request, response) => {

	// send source list
	response.json(icecastService.getSourceList());
});

// Handle socket events
io.on('connection', (socket) => {

	console.log('connected');

	// Send stats to client
    socket.emit('sourceList', icecastService.getSourceList());

    // Get Sources
    socket.on('getSources', async () => {
        console.log('getSources');
        socket.emit('sourceList', icecastService.getSourceList());
    });

    // Create Source
    socket.on('createSource', async (userId, mountId, metadata) => {
        console.log('createSource', userId, mountId, metadata);
        await icecastService.createSource(userId, mountId, metadata);
        io.emit('sourceList', icecastService.getSourceList());
    });

	// Put Source Data
    socket.on('putSourceData', async (userId, mountId, data, metadata) => {
        console.log('putSourceData', userId, mountId, metadata, data);
        await icecastService.putSourceData(userId, mountId, data, metadata);
    });

    // Kill Source
    socket.on('killSource', async (userId, mountId) => {
        console.log('killSource', userId, mountId);
        await icecastService.killSource(userId, mountId);
        io.emit('sourceList', icecastService.getSourceList());
    });
});

// Mount server
server.listen(3000);