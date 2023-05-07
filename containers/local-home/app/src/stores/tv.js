import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import SocketIO from "socket.io-client";

export const useTvStore = defineStore('tv', () => {

	// setup
	const HOSTNAME = import.meta.env.VITE_HOSTNAME;
	const socket = SocketIO(`//tv-middleware.${ HOSTNAME }`);

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