import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-3-socket.io";
import SocketIO from "socket.io-client";
import './assets/main.css'

// ENV
const MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_TV_MIDDLEWARE_PORT || 3000;
const protocol = window.location.protocol;
const hostname = window.location.hostname;

// Create app
const app = createApp(App);

// Middleware
app.use(
	new VueSocketIO({
		debug: true,
		connection: SocketIO(`${ protocol }//${ hostname }:${ MIDDLEWARE_PORT }`),
	})
);
app.mount('#app');