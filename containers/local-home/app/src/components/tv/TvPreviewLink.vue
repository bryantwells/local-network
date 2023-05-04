<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
</script>

<template>
	<div class="PreviewLink PreviewLink--tv">
	</div>
</template>

<script>
export default {
	name: "TvPreviewLink",
	computed: {
		...mapState(useTvStore, ['sources']),
	},
}
</script>

<style>
.PreviewLink--tv {
	background-color: rgb(0,255,0);
}
</style>