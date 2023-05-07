<script setup>
import RadioViewerLink from '@/components/radio/RadioViewerLink.vue';
import TvViewerLink from '@/components/tv/TvViewerLink.vue';
import LibraryViewerLink from '@/components/library/LibraryViewerLink.vue';
</script>

<template>
	<RadioViewerLink 
		v-if="type == 'radio'" />
	<TvViewerLink
		v-if="type == 'tv'" />
	<LibraryViewerLink
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "ViewerLink",
	components: {
		RadioViewerLink,
		TvViewerLink,
		LibraryViewerLink,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.ViewerLink {
	position: relative;
    border-radius: 0.5rem;
    padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
}
.ViewerLink-title,
.ViewerLink-subTitle {
	position: relative;
	z-index: 1;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.ViewerLink-video {
	position: absolute;
	z-index: 0;
	top: 0; left: 0;
	width: 100%;
	height: 100%;
	border-radius: var(--border-radius);
}
</style>