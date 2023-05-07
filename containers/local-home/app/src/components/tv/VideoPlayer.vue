<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
import Hls from 'hls.js/dist/hls.min';
</script>

<template>
	<div class="VideoPlayer"
		:class="{
			'VideoPlayer--preview': isPreview,
			'is-loaded': isLoaded,
			'is-playing': isPlaying,
		}">
		<video 
			class="VideoPlayer-video"
			ref="video"
			:muted="isPreview"
			:autoplay="isPreview"
			:playsinline="isPreview"
		/>
		<div 	
			v-if="!isPreview"
			class="VideoPlayer-controls">
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
		isPreview: {
			default: true,
			type: Boolean
		},
	},
	computed: {
		...mapState(useTvStore, ['sources', 'activeSource']),
		src() {
			const HOSTNAME = import.meta.env.VITE_HOSTNAME;
			return `//tv-server.${ HOSTNAME }/hls/${ this.activeSource.name }.m3u8`
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
			} else if (this.$refs['video'].canPlayType('application/vnd.apple.mpegurl')) {
				this.$refs['video'].src = this.src;
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
			if (this.$refs['video'].webkitEnterFullScreen) {
				this.$refs['video'].webkitEnterFullScreen();
			} else {
				this.$refs['video'].requestFullscreen();
			}
			
		},
	},
}
</script>

<style>
.VideoPlayer {
	position: absolute;
	top: 0; left: 0;
	width: 100%;
	height: 100%;
	border-radius: var(--border-radius);
	overflow: hidden;
}
.VideoPlayer-video {
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
}
.VideoPlayer--preview .VideoPlayer-video {
	object-fit: cover;
}
.VideoPlayer-controls {
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
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
	padding: var(--space-sm);
}
</style>