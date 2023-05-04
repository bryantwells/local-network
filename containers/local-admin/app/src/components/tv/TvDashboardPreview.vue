<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
</script>

<template>
	<div class="DashboardPreview DashboardPreview--tv">
		<div class="DashboardPreview-title">
			Local TV (Available)
		</div>
		<a class="DashboardPreview-button">
			Create Video Stream
		</a>
	</div>
</template>

<script>
export default {
	name: "TvDashboardPreview",
	computed: {
		...mapState(useTvStore, ['sources']),
	},
}
</script>

<style>
.DashboardPreview--tv {
	background-color: rgb(0,255,0);
}
</style>