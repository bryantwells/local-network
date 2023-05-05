<script setup>
import RadioPreview from '@/components/radio/RadioPreview.vue';
import TvPreview from '@/components/tv/TvPreview.vue';
</script>

<template>
	<RadioPreview 
		v-if="type == 'radio'" />
	<TvPreview 
		v-if="type == 'tv'" />
</template>

<script>
export default {
	name: "Preview",
	components: {
		RadioPreview,
		TvPreview,
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
}
.Preview-body {
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
}
.Preview-meta {
	margin-bottom: 0.5rem;
	flex: 1;
}
</style>