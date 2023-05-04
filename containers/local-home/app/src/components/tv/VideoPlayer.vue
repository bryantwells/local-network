<script setup>
    import Hls from 'hls.js/dist/hls.min';
</script>

<template>
	<div class="VideoPlayer"
		:class="{
			'is-loaded': isLoaded,
			'is-playing': isPlaying,
		}">
		<video 
			class="VideoPlayer-video"
			ref="video"
			muted
			autoplay
		/>
		<div class="VideoPlayer-controls">
			<div
				v-if="isPlaying"
				class="VideoPlayer-button VideoPlayer-button--pause"
				@click="pause()">
				Pause
			</div>
			<div 
				v-if="!isPlaying"
				class="VideoPlayer-button VideoPlayer-button--play"
				@click="play()">
				Play
			</div>
			<div 
				class="VideoPlayer-button VideoPlayer-button--fullscreen"
				@click="fullscreen()">
				Fullscreen
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "VideoPlayer",
	data() {
		return {
			isLoaded: false,
			isPlaying: false,
		}
	},
	props: {
		sourceData: Object,
	},
	computed: {
		src() {
			const SERVER_PORT = import.meta.env.VITE_LOCAL_TV_SERVER_PORT;
			const protocol = window.location.protocol;
            const hostname = window.location.hostname;
			return `${ protocol }//${ hostname }:${ SERVER_PORT }/hls/${ this.sourceData.name }.m3u8`
		}
	},
	mounted() {
		const loadVideoInterval = setInterval(() => {
			if (this.urlExists(this.src)) {
				this.loadVideo();
				clearInterval(loadVideoInterval);
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
		loadVideo() {
			this.isLoaded = true;
			if (Hls.isSupported()) {
				const hls = new Hls();
				hls.loadSource(this.src);
				hls.attachMedia(this.$refs['video']);
			}
		},
		play() {
			this.$refs['video'].play();
			this.isPlaying = true;
		},
		pause() {
			this.$refs['video'].pause();
			this.isPlaying = false;
		},
		fullscreen() {
			this.$refs['video'].requestFullscreen();
		},
	},
}
</script>

<style>
.VideoPlayer {
	position: relative;
	background: black;
}
.VideoPlayer-video {
	/* opacity: 0.5; */
	width: 100%;
	max-height: calc(100vh - 6rem);
	object-fit: contain;
}
.VideoPlayer.is-playing .VideoPlayer-video {
	opacity: 1;
}
.VideoPlayer-controls {
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	display: none;
}
.VideoPlayer.is-playing .VideoPlayer-controls {
	opacity: 0;
}
.VideoPlayer.is-playing:hover .VideoPlayer-controls {
	opacity: 1;
}
.VideoPlayer-button {
	color: white;
	cursor: pointer;
	padding: 1rem;
}
</style>