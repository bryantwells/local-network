<script setup>
import RadioDashboard from '@/components/radio/RadioDashboard.vue';
</script>

<template>
	<RadioDashboard 
		v-if="type == 'radio'" />
</template>

<script>
export default {
	name: "Dashboard",
	components: {
		RadioDashboard,
	},
	props: {
		type: String,
	}
}
</script>

<style>
.Dashboard {
	padding: 0.5rem;
	min-height: 100%;
	border-radius: 0.5rem;
}
</style>