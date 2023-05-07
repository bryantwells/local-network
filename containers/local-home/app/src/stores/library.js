import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import axios from 'axios';

export const useLibraryStore = defineStore('library', () => {

	// setup
	const HOSTNAME = import.meta.env.VITE_HOSTNAME;

	// State
	const files = ref({});
	const rootUrl = `//library.${ HOSTNAME }`;

	// Getters
	const latestFile = computed(() => {
		return (files.value.length) ? files.value[0] : null;
	});
	const totalSize = computed(() => {
		return (files.value.length) ? files.value.reduce((a,b) => { return a + b.size }, 0) : null;
	});

	// Functions
	function getFiles() {
		axios.get(`//library.${ HOSTNAME }/files.php`)
			.then(response => {
				files.value = response.data;
			});
	}
	function uploadFile(file) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();
			formData.append('file', file);
			axios.post(`//library.${ HOSTNAME }/upload.php`, formData, {
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