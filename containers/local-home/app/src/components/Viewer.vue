<script setup>
import RadioViewer from '@/components/radio/RadioViewer.vue';
import TvViewer from '@/components/tv/TvViewer.vue';
import LibraryViewer from '@/components/library/LibraryViewer.vue';
</script>

<template>
	<RadioViewer 
		v-if="type == 'radio'" />
	<TvViewer 
		v-if="type == 'tv'" />
	<LibraryViewer 
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "Viewer",
	components: {
		RadioViewer,
		TvViewer,
		LibraryViewer,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.Viewer {
	min-height: 100%;
	border-radius: var(--space-sm);
	padding: var(--border-radius);
}
</style>