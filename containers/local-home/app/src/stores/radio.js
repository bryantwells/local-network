import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import SocketIO from "socket.io-client";

export const useRadioStore = defineStore('radio', () => {

	// setup
	const HOSTNAME = import.meta.env.VITE_HOSTNAME;
	const socket = SocketIO(`//radio-middleware.${ HOSTNAME }`);

	// State
	const sources = ref([]);

	// Getters
	const activeSource = computed(() => {
		return sources.value.find((source) => source.mountId == 'local-radio');
	});
	const activeSourceExists = computed(() => {
		return sources.value.filter((source) => source.mountId == 'local-radio').length > 0;
	});
	
	// Functions
	function createSource(userId, mountId, bufferLength, metadata) {
		socket.emit('createSource',userId, mountId, bufferLength, metadata);
	}
	function putSourceData(userId, mountId, data, bufferLength, metadata) {
		socket.emit('putSourceData', userId, mountId, data, bufferLength, metadata);
	}
	function killSource(userId, mountId, bufferLength) {
		socket.emit('killSource', userId, mountId, bufferLength);
	}

	// Socket Events
	socket.on('sourceList', (data) => {
		sources.value = data;
	});

	return { sources, activeSource, activeSourceExists, createSource, putSourceData, killSource };
})