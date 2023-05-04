<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
</script>

<template>
	<router-link  
		class="DashboardLink DashboardLink--radio"
		to="dashboard/radio">
		<div 
			class="DashboardLink-title">
			Local Radio (Available)
		</div>
		<div
			class="DashboardLink-button">
			Create Audio Stream
		</div>
	</router-link>
</template>

<script>
export default {
	name: "RadioDashboardLink",
	computed: {
		...mapState(useRadioStore, ['sources']),
	},
}
</script>

<style>
.DashboardLink--radio {
	background-color: rgb(255,0,0);
}
</style>