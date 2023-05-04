import { defineStore } from 'pinia';
import {computed, ref} from "vue";
import SocketIO from "socket.io-client";

export const useRadioStore = defineStore('radio', () => {

	// setup
	const protocol = window.location.protocol;
	const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_MIDDLEWARE_HOSTNAME || 'localhost';
	const RADIO_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_RADIO_MIDDLEWARE_PORT || 3000;
	const socket = SocketIO(`${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_MIDDLEWARE_PORT }`);

	// State
	const sourceList = ref([]);

	// Getters
	const activeSource = computed(() => {
		return sourceList.value.find((source) => source.mountId == 'local-radio');
	});
	
	// Functions
	function createSource(userId, mountId, metadata) {
		socket.emit('createSource',userId, mountId, metadata);
	}
	function putSourceData(userId, mountId, MP3Blob, metadata) {
		socket.emit('putSourceData', userId, mountId, MP3Blob, metadata);
	}
	function killSource(userId, mountId) {
		socket.emit('killSource', userId, mountId);
	}

	// Socket Events
	socket.on('sourceList', (data) => {
		sourceList.value = data;
	});

	return { sourceList, activeSource, createSource, putSourceData, killSource };
})