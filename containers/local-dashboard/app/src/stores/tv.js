import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import SocketIO from "socket.io-client";

export const useTvStore = defineStore('tv', () => {

	// setup
	const protocol = window.location.protocol;
	const TV_HOSTNAME = import.meta.env.VITE_LOCAL_TV_HOSTNAME || 'localhost';
	const RADIO_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_TV_MIDDLEWARE_PORT || 3000;
	const socket = SocketIO(`${ protocol }//${ TV_HOSTNAME }:${ RADIO_MIDDLEWARE_PORT }`);

	// State
	const sources = ref([]);

	// Getters
	const activeSource = computed(() => {
		return (sources.value.length) ? sources.value[0] : null;
	});

	// Socket Events
	socket.on('sourceList', (data) => {
		sources.value = data;
	});

	return { sources, activeSource };
})