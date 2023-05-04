<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>

<template>
	<a class="DashboardPreview DashboardPreview--library">
		<div class="DashboardPreview-title">
			Local Library (Available)
		</div>
		<a class="DashboardPreview-button">
			Upload Media
		</a>
	</a>
</template>

<script>
export default {
	name: "LibraryDashboardPreview",
	computed: {
		...mapState(useLibraryStore, ['files']),
	},
}
</script>

<style>
.DashboardPreview--library {
	background-color: rgb(0,0,255);
}
</style>