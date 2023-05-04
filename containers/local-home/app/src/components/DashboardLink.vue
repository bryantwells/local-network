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
		v-if="type == 'libary'" />
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
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 0.5rem;
	white-space: nowrap;
}
.DashboardLink-title {
    flex: 1;
}
.DashboardLink-button {
    background-color: black;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
}
.DashboardLink-title,
.DashboardLink-button {
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>