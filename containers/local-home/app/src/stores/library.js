import { defineStore } from 'pinia';
import { ref } from "vue";
import axios from 'axios';

export const useLibraryStore = defineStore('library', () => {

	// setup
	const protocol = window.location.protocol;
	const LIBRARY_HOSTNAME = import.meta.env.VITE_LOCAL_LIBRARY_HOSTNAME || 'localhost';
	const LIBRARY_PORT = import.meta.env.VITE_LOCAL_LIBRARY_PORT || 3000;

	// State
	const files = ref({});

	// Socket Events
	axios.get(`${ protocol }//${ LIBRARY_HOSTNAME }:${ LIBRARY_PORT }/scripts/files.php`)
		.then(response => {
			files.value = response.data;
		});

	return { files };
});