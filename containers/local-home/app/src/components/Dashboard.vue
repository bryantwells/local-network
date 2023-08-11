<script setup>
import RadioDashboard from '@/components/radio/RadioDashboard.vue';
import TvDashboard from '@/components/tv/TvDashboard.vue';
import LibraryDashboard from '@/components/library/LibraryDashboard.vue';
</script>

<template>
	<RadioDashboard 
		v-if="type == 'radio'"
		:user-id="userId" />
	<TvDashboard 
		v-if="type == 'tv'" />
	<LibraryDashboard 
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "Dashboard",
	components: {
		RadioDashboard,
		TvDashboard,
		LibraryDashboard
	},
	props: {
		type: String,
		userId: String,
	}
}
</script>

<style>
.Dashboard {
	min-height: 100%;
	border-radius: var(--border-radius);
	padding: var(--space-sm);
	color: black
}
</style>