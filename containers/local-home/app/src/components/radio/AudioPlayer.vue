<template>
	<div 
        class="AudioPlayer">
		<audio
            class="AudioPlayer-audio"
            ref="audio"
            controls
        />
	</div>
</template>

<script>
export default {
	name: "AudioPlayer",
	data() {
		return {
			isLoaded: false,
		}
	},
    computed: {
        src() {
			const SERVER_PORT = import.meta.env.VITE_LOCAL_RADIO_SERVER_PORT || 3000;
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const hash = Math.random().toString(36).substring(2,10);
            return `${ protocol }//${ hostname }:${ SERVER_PORT }/local-radio?cb=${ hash }`
		}
    },
    mounted() {
        const loadAudioInterval = setInterval(() => {
			if (this.urlExists(this.src)) {
				this.$refs.audio.src = this.src;
				clearInterval(loadAudioInterval);
			}
		}, 1000);
    },
    methods: {
        urlExists(url) {
			const http = new XMLHttpRequest();
			http.open('HEAD', url, false);
			http.send();
			return http.status != 404;
		},
    },
}
</script>

<style>
.AudioPlayer-button {
	cursor: pointer;
	display: inline-block;
	background: red;
	color: white;
	border-radius: 0.25rem;
	padding: 0.25rem 0.5rem;
	margin-right: 0.5rem;
    margin-bottom: 1rem;
}
.AudioPlayer-button:hover {
	background-color: black;
}
.AudioPlayer-audio {
    width: 100%;
}
</style>