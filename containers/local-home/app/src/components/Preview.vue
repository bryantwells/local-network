<script setup>
import RadioPreview from '@/components/radio/RadioPreview.vue';
</script>

<template>
	<RadioPreview 
		v-if="type == 'radio'" />
</template>

<script>
export default {
	name: "Preview",
	components: {
		RadioPreview,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.Preview {
	padding: 0.5rem;
	min-height: 100%;
	border-radius: 0.5rem;
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
</style>