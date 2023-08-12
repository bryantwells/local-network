<script setup>
import RadioInfoLink from '@/components/radio/RadioInfoLink.vue';
import TvInfoLink from '@/components/tv/TvInfoLink.vue';
import AboutInfoLink from '@/components/about/AboutInfoLink.vue';
</script>

<template>
	<RadioInfoLink 
		v-if="type == 'radio'" />
	<TvInfoLink
		v-if="type == 'tv'" />
	<AboutInfoLink
		v-if="type == 'about'" />
</template>

<script>
export default {
	name: "InfoLink",
	components: {
		RadioInfoLink,
		TvInfoLink,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.InfoLink {
    border-radius: var(--space-sm);
    padding: var(--space-sm);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: var(--space-sm);
	height: 100%;
}
</style>