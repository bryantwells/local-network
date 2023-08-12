<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
	<div
		class="InfoLink InfoLink--radio">
		<div class="InfoLink-title">
			Local Radio is inactive. Connect to the BLN WiFi hotspot to start a new audio stream.
		</div>
	</div>
</template>

<script>
export default {
	name: "RadioInfoLink",
}
</script>

<style>
.InfoLink--radio {
	background-color: var(--color-radio);
}
</style>