import { defineStore } from 'pinia';
import { computed, ref } from "vue";
import axios from 'axios';

export const useClientStore = defineStore('client', () => {

	// setup
	const HOSTNAME = import.meta.env.VITE_HOSTNAME;

	// State
	const ip = ref('');
	const rootUrl = `//ip.${ HOSTNAME }`;

	// Getters
	const isLocal = computed(() => {
		return ip.value.startsWith('192.')
			|| ip.value.startsWith('172.')
			|| ip.value.startsWith('10.');
	});

	// Functions
	function getIp() {
		axios.get(`//ip.${ HOSTNAME }`)
            .then(response => {
				ip.value = response.data;
			});
	}

    getIp();
	
	return { ip, rootUrl, isLocal };
});