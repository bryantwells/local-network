<script setup>
import RadioDashboardLink from '@/components/radio/RadioDashboardLink.vue';
import TvDashboardLink from '@/components/tv/TvDashboardLink.vue';
import LibraryDashboardLink from '@/components/library/LibraryDashboardLink.vue';
</script>

<template>
	<RadioDashboardLink 
		v-if="type == 'radio'" />
	<TvDashboardLink 
		v-if="type == 'tv'" />
	<LibraryDashboardLink 
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "DashboardLink",
	components: {
		RadioDashboardLink,
		TvDashboardLink,
		LibraryDashboardLink,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.DashboardLink {
	display: flex;
    flex-direction: column;
    min-height: 100%;
    padding: var(--space-sm);
	gap: var(--space-sm);
	border-radius: var(--border-radius);
	color: black;
}
.DashboardLink-title {
    flex: 1;
}
</style>