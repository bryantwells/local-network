<script setup>
import RadioPreviewLink from '@/components/radio/RadioPreviewLink.vue';
import TvPreviewLink from '@/components/tv/TvPreviewLink.vue';
import LibraryPreviewLink from '@/components/library/LibraryPreviewLink.vue';
</script>

<template>
	<RadioPreviewLink 
		v-if="type == 'radio'" />
	<TvPreviewLink
		v-if="type == 'tv'" />
	<LibraryPreviewLink
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "PreviewLink",
	components: {
		RadioPreviewLink,
		TvPreviewLink,
		LibraryPreviewLink,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.PreviewLink {
    border-radius: 0.5rem;
    padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	white-space: nowrap;
}
.PreviewLink-title,
.PreviewLink-subTitle {
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>