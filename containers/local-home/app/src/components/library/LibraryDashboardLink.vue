<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
import Button from '@/components/Button.vue';
</script>

<template>
	<router-link  
		class="DashboardLink DashboardLink--library"
		to="/library"
		:style="{
			backgroundImage: (files.length) ? `url('${ rootUrl }/files/${ latestFile.path }')` : '',
		}">
		<div 
			class="DashboardLink-title">
			Local Archive uses {{ totalSizeInMb }}mb of memory.
		</div>
		<Button
			label="View The Archive"
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
.DashboardLink.DashboardLink--library {
	background-size: cover;
	background-position: center;
	background-color: var(--color-library);
	color: white;
	text-shadow: 
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library);
}
</style>