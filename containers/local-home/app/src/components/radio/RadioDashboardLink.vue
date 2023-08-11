<script setup>
	import Button from '@/components/Button.vue';
</script>

<template>
	<router-link  
		class="DashboardLink DashboardLink--radio"
		to="/radio">
		<div 
			class="DashboardLink-title">
			Local Radio is available for broadcasting.
		</div>
		<Button
			label="Create Audio Stream"
			style="
				--color: var(--color-radio);
			"
		/>
	</router-link>
</template>

<script>
export default {
	name: "RadioDashboardLink",
}
</script>

<style>
.DashboardLink--radio {
	background-color: var(--color-radio);
}
</style>