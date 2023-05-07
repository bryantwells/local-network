<script setup>
import AudioPlayer from '@/components/radio/AudioPlayer.vue';
</script>

<template>
	<div 
		class="Viewer Viewer--radio">
		<AudioPlayer />
	</div>
</template>

<script>
export default {
	name: "RadioViewer",
	components: {
		AudioPlayer,
	},
}
</script>

<style>
.Viewer--radio {
	background-color: rgb(255,0,0);
}
</style>