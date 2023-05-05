<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
</script>

<template>
	<router-link 
		class="DashboardLink DashboardLink--tv"
		to="/tv">
		<div 
			class="DashboardLink-title">
			Local TV (Available)
		</div>
		<a 
			class="DashboardLink-button">
			Create Video Stream
		</a>
	</router-link>
</template>

<script>
export default {
	name: "TvDashboardLink",
	computed: {
		...mapState(useTvStore, ['sources']),
	},
}
</script>

<style>
.DashboardLink--tv {
	background-color: rgb(0,255,0);
}
</style>