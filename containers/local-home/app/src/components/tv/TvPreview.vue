<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
</script>

<template>
	<div 
		class="Preview Preview--tv">
		<div 
			v-if="activeSource"
			class="Preview-body">
			Hello
		</div>
	</div>
</template>

<script>
export default {
	name: "TvPreview",
	computed: {
		...mapState(useTvStore, ['activeSource']),
	},
}
</script>

<style>
.Preview--tv {
	background-color: rgb(0,255,0);
}
</style>