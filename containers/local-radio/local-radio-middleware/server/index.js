import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import { IcecastService } from "./modules/IcecastService.js";
import io from "./modules/io.js";
import eventHandlers from './modules/eventHandlers.js';

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

// Kill leftover sources
icecastService.killAllSources();

// Get socket event handlers
const { getSources, createSource, putSourceData, killSource } = eventHandlers(io, icecastService);

// Register socket event handlers
io.on('connection', (socket) => {

	// Stats
    socket.emit('sourceList', icecastService.getSourceList());

    // Event Handlers
    socket.on('getSources', getSources);
    socket.on('createSource', createSource);
    socket.on('putSourceData', putSourceData);
    socket.on('killSource', killSource);
});

// Mount server
server.listen(3000);