<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
import VideoPlayer from '@/components/tv/VideoPlayer.vue';
</script>

<template>
	<router-link
		to="/tv"
		class="ViewerLink ViewerLink--tv">
		<div 
			class="ViewerLink-title">
			Local TV (Live)
		</div>
		<div class="ViewerLink-video">
			<VideoPlayer />
		</div>
	</router-link>
</template>

<script>
export default {
	name: "TvViewerLink",
	components: {
		VideoPlayer,
	},
	computed: {
		...mapState(useTvStore, ['sources','activeSource']),
	},
}
</script>

<style>
.ViewerLink--tv {
	color: var(--color-tv);
	text-shadow: 
		0 0 0.1rem black,
		0 0 0.1rem black,
		0 0 0.1rem black,
		0 0 0.1rem black,
		0 0 0.1rem black;
	background: black;
}
</style>