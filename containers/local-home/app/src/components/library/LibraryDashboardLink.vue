<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>

<template>
	<a class="DashboardLink DashboardLink--library">
		<div class="DashboardLink-title">
			Local Library (Available)
		</div>
		<a class="DashboardLink-button">
			Upload Media
		</a>
	</a>
</template>

<script>
export default {
	name: "LibraryDashboardLink",
	computed: {
		...mapState(useLibraryStore, ['files']),
	},
}
</script>

<style>
.DashboardLink--library {
	background-color: rgb(0,0,255);
}
</style>