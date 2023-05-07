<script setup>
	import Button from '@/components/Button.vue';
</script>

<template>
	<router-link  
		class="DashboardLink DashboardLink--tv"
		to="/tv">
		<div 
			class="DashboardLink-title">
			Local TV is currently incative and available for broadcasting.
		</div>
		<Button
			label="Create Video Stream"
			style="
				--color: var(--color-tv);
			"
		/>
	</router-link>
</template>

<script>
export default {
	name: "TvDashboardLink",
}
</script>

<style>
.DashboardLink--tv {
	background-color: var(--color-tv);
}
</style>