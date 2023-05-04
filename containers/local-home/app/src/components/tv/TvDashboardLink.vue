<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
</script>

<template>
	<div class="DashboardLink DashboardLink--tv">
		<div class="DashboardLink-title">
			Local TV (Available)
		</div>
		<a class="DashboardLink-button">
			Create Video Stream
		</a>
	</div>
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