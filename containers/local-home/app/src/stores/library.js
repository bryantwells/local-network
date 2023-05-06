import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import axios from 'axios';

export const useLibraryStore = defineStore('library', () => {

	// setup
	const protocol = window.location.protocol;
	const LIBRARY_HOSTNAME = import.meta.env.VITE_LOCAL_LIBRARY_HOSTNAME || 'localhost';
	const LIBRARY_PORT = import.meta.env.VITE_LOCAL_LIBRARY_PORT || 3000;
	const LIBRARY_URL = `${ protocol }//${ LIBRARY_HOSTNAME }:${ LIBRARY_PORT }`;

	// State
	const files = ref({});
	const rootUrl = LIBRARY_URL;

	// Getters
	const latestFile = computed(() => {
		return (files.value.length) ? files.value[0] : null;
	});
	const totalSize = computed(() => {
		return (files.value.length) ? files.value.reduce((a,b) => { return a + b.size }, 0) : null;
	});

	// Functions
	function getFiles() {
		axios.get(`${ LIBRARY_URL }/files.php`)
			.then(response => {
				files.value = response.data;
			});
	}
	function uploadFile(file) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			formData.append('file', file);
			axios.post(`${ LIBRARY_URL }/upload.php`, formData, {
					headers: { 'Content-Type': 'multipart/form-data' }
				})
				.then(response => {
					if (!response.data) {
						alert('An error occurred.');
					} else {
						resolve(response.data);
					}
				})
				.catch((error) => {
					reject(error);
				});
		})
		
	}

	getFiles();

	return { files, rootUrl, latestFile, totalSize, getFiles, uploadFile };
});