<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
	<router-link
		to="/info"
		class="InfoLink InfoLink--radio">
		<div class="InfoLink-title">
			Local Radio is currently incative and available for broadcasting.
		</div>
		<Button
			label="Learn More"
			style="
				--color: var(--color-radio)
			"
		/>
	</router-link>
</template>

<script>
export default {
	name: "RadioInfoLink",
}
</script>

<style>
.InfoLink--radio {
	background-color: var(--color-radio);
}
</style>