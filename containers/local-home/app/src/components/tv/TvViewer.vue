<script setup>
import VideoPlayer from '@/components/tv/VideoPlayer.vue';
</script>

<template>
	<div 
		class="Viewer Viewer--tv">
		<VideoPlayer 
			:is-preview="false"
		/>
	</div>
</template>

<script>
export default {
	name: "VideoPlayer",
	components: {
		VideoPlayer,
	},
}
</script>

<style>
.Viewer.Viewer--tv {
	background-color: black;
	padding: 0;
	height: 100%;
	min-height: unset;
	overflow: hidden;
	position: relative;
}
</style>