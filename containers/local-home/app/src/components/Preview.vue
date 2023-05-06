<script setup>
import RadioPreview from '@/components/radio/RadioPreview.vue';
import TvPreview from '@/components/tv/TvPreview.vue';
import LibraryPreview from './library/LibraryPreview.vue';
</script>

<template>
	<RadioPreview 
		v-if="type == 'radio'" />
	<TvPreview 
		v-if="type == 'tv'" />
	<LibraryPreview 
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "Preview",
	components: {
		RadioPreview,
		TvPreview,
		LibraryPreview,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.Preview {
	min-height: 100%;
	border-radius: 0.5rem;
	padding: 0.5rem;
}
.Preview-body {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.Preview-meta {
	margin-bottom: 0.5rem;
	flex: 1;
}
.Preview-button {
    background-color: black;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
</style>