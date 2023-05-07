<script setup>
import RadioServiceLink from '@/components/radio/RadioServiceLink.vue';
import TvServiceLink from '@/components/tv/TvServiceLink.vue';
</script>

<template>
	<RadioServiceLink 
		v-if="type == 'radio'" />
	<TvServiceLink 
		v-if="type == 'tv'" />
</template>

<script>
export default {
	name: "ServiceLink",
	components: {
		RadioServiceLink,
		TvServiceLink,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.ServiceLink {
	display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: var(--space-sm);
	border-radius: var(--border-radius);
}
.ServiceLink-title {
    flex: 1;
}
</style>