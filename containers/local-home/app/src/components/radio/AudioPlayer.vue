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
		<audio
            class="AudioPlayer-audio"
            ref="audio"
			:src="src"
			controls
			@error="handleError"
            @loadedmetadata.once="handleLoadedMetadata"
        />
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
    },
    mounted() {
        this.src = this.getSrc();
    },
    methods: {
		handleError() {
            setTimeout(() => {
                this.src = this.getSrc();
            }, 1000);
            return true;
        },
        handleLoadedMetadata() {
            this.isLoaded = true;
        },
		getSrc() {
			const protocol = window.location.protocol;
			const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME || localhost;
            const RADIO_SERVER_PORT = import.meta.env.VITE_LOCAL_RADIO_SERVER_PORT || 3000;
            const hash = Math.random().toString(36).substring(2,10);
            return `${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_SERVER_PORT }/local-radio?cb=${ hash }`
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