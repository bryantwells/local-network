import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { Low } from 'lowdb';
import { JSONFileSync } from "lowdb/node";

// Create JSON DB
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbFile = join(__dirname, './models/sources.json');
const dbAdapter = new JSONFileSync(dbFile);
const db = new Low(dbAdapter);

// Get data from DB
await db.read();

// Make sources model
db.data.sources = (db.data.sources)
	? db.data.sources
	: [];

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

app.get('/', (request, response) => {
    response.send('Hello World from Tv!');
})

// Handle GET reqquest
app.get('/stats', (request, response) => {

	// send source list
	response.json(db.data.sources);
});

// Hand POST reqquest
app.post('/publish', (request, response) => {
	if (request.body) {
		if (request.body.app == 'live' && request.body.name == 'local-tv') {

			// update stats
			db.data.sources = [request.body];
			
			// OK request
			response.sendStatus(200);

			// Send stats to all clients
			io.emit('sourceList', db.data.sources);
		}
	} else {

		// Invalid request
		response.sendStatus(400);
	}
});

// Hand POST reqquest
app.post('/done', (request, response) => {
	if (request.body) {
		if (request.body.app == 'live' && request.body.name == 'local-tv') {

			// update stats
			db.data.sources = [];

			// OK request
			response.sendStatus(200);

			// Send stats to all clients
			io.emit('sourceList', db.data.sources);
		}
	} else {

		// Invalid request
		response.sendStatus(400);
	}
});

// Handle socket events
io.on('connection', (socket) => {

	// Send stats to client
    socket.emit('sourceList', db.data.sources);
});

// Mount server
server.listen(3000);
console.log('server listening on :3000');