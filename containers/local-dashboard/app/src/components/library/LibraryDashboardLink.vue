<script setup>
	import { mapState } from 'pinia';
	import { useLibraryStore } from '@/stores/library';
	import Button from '@/components/Button.vue';
</script>

<template>
	<router-link  
		class="DashboardLink DashboardLink--library"
		to="/library">
		<div 
			class="DashboardLink-title">
			Local Library is hosting {{ totalSizeInMb }}mb of community media.
		</div>
		<Button
			label="Upload Media"
			style="
				--color: var(--color-library);
			"
		/>
	</router-link>
</template>

<script>
export default {
	name: "LibraryDashboardLink",
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
		totalSizeInMb() {
			return (this.totalSize) ? Math.round((this.totalSize / 1000000) * 100)/100 : 0;
		}
	},
}
</script>

<style>
.DashboardLink--library {
	background-color: var(--color-library);
}
</style>