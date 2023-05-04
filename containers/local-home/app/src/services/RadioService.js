import { io } from "socket.io-client";

class RadioService {
	constructor() {
		this.socket;
		const protocol = window.location.protocol;
		const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME;
		const RADIO_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_RADIO_MIDDLEWARE_PORT || 3000;
		this.socket = io(`${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_MIDDLEWARE_PORT }`);
	}
}

export default new RadioService();