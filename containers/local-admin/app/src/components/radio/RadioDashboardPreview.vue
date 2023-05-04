<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
</script>

<template>
	<a class="DashboardPreview DashboardPreview--radio">
		<div class="DashboardPreview-title">
			Local Radio (Available)
		</div>
		<a class="DashboardPreview-button">
			Create Audio Stream
		</a>
	</a>
</template>

<script>
export default {
	name: "RadioDashboardPreview",
	computed: {
		...mapState(useRadioStore, ['sources']),
	},
}
</script>

<style>
.DashboardPreview--radio {
	background-color: rgb(255,0,0);
}
</style>