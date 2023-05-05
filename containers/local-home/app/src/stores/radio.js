import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import SocketIO from "socket.io-client";

export const useRadioStore = defineStore('radio', () => {

	// setup
	const protocol = window.location.protocol;
	const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME || 'localhost';
	const RADIO_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_RADIO_MIDDLEWARE_PORT || 3000;
	const socket = SocketIO(`${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_MIDDLEWARE_PORT }`);

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