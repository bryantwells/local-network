<template>
	<div class="AudioPlayer">
        <div class="AudioPlayer-meta">
            <span
                v-if="activeSource.metadata.title">
                {{ activeSource.metadata.title }}
            </span>
            <span
                v-else>
                Untitled
            </span>
        </div>
		<audio
            class="AudioPlayer-audio"
            :class="{ 'is-playable': isPlayable }"
            :src="src"
            controls
            @error="handleError"
            @loadedmetadata.once="handleLoadedMetadata" />
	</div>
</template>

<script>
export default {
	name: "AudioPlayer",
	data() {
        return {
            src: '',
            isPlayable: false,
        }
    },
    props: {
        activeSource: {
            default: {},
            type: Object,
        },
    },
    computed: {
        cacheBustedSrc() {
            const url = new URL(window.location);
            return url;
        }
    },
    mounted() {
        this.src = this.getSrc();
    },
    methods: {
        /**
         * Handle 'error' event
         * Keep reloading the audio player until it doesn't 404
         */
        handleError() {
            setTimeout(() => {
                this.src = this.getSrc();
            }, 1000);
            return true;
        },

        /**
         * Handle 'canplay' event
         */
        handleLoadedMetadata() {
            this.isLoaded = true;
        },

        /**
         * Get the URL for the audio player
         */
        getSrc() {
            const SERVER_PORT = import.meta.env.VITE_LOCAL_RADIO_SERVER_PORT || 3000;
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const hash = Math.random().toString(36).substring(2,10);
            return `${ protocol }//${ hostname }:${ SERVER_PORT }/local-radio?cb=${ hash }`
        }
    },
}
</script>

<style>
.AudioPlayer-meta {
    margin-bottom: 1rem;
}
.AudioPlayer-audio {
    width: 100%;
}
</style>