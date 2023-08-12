<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
	<div
		class="InfoLink InfoLink--tv">
		<div class="InfoLink-title">
			Local TV is inactive. Connect to the BLN WiFi hotspot to start a new video stream.
		</div>
	</div>
</template>

<script>
export default {
	name: "TvInfoLink",
	components: {
		Button,
	},
}
</script>

<style>
.InfoLink--tv {
	background-color: var(--color-tv);
}
</style>