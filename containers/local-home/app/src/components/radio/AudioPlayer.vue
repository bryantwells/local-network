<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
</script>

<template>
	<div 
        class="AudioPlayer">
		<div class="AudioPlayer-title">
			Now Playing:
			<br>{{ activeSource.metadata.title }} (Live)
		</div>
		<audio class="AudioPlayer-audio" controls>
			<source :src="oggSrc" type="audio/ogg" />
			<source :src="mp3Src" type="audio/mpeg" />
		</audio>
	</div>
</template>

<script>
export default {
	name: "AudioPlayer",
	data() {
		return {
			isLoaded: false,
			src: '',
		}
	},
    computed: {
		...mapState(useRadioStore, ['activeSource']),
		oggSrc() {
			const HOSTNAME = import.meta.env.VITE_HOSTNAME;
            const hash = Math.random().toString(36).substring(2,10);
            return `//radio-server.${ HOSTNAME }/local-radio?cb=${ hash }`;
        },
		mp3Src() {
			const HOSTNAME = import.meta.env.VITE_HOSTNAME;
            const hash = Math.random().toString(36).substring(2,10);
            return `//radio-server.${ HOSTNAME }/local-radio-mp3?cb=${ hash }`;
        },
    },
}
</script>

<style>
.AudioPlayer {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.AudioPlayer-audio {
	width: 100%;
}
</style>