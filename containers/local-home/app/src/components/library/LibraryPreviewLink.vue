<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>


<template>
	<div class="PreviewLink PreviewLink--library">
	</div>
</template>

<script>
export default {
	name: "LibraryPreviewLink",
	computed: {
		...mapState(useLibraryStore, ['files']),
	},
}
</script>

<style>
.PreviewLink--library {
	background-color: rgb(0,0,255);
}
</style>