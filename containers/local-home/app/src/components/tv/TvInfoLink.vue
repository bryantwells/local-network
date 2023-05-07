<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
	<router-link
		to="/info"
		class="InfoLink InfoLink--tv">
		<div class="InfoLink-title">
			Local TV is currently incative and available for broadcasting.
		</div>
		<Button
			label="Learn More"
			style="
				--color: var(--color-tv)
			"
		/>
	</router-link>
</template>

<script>
export default {
	name: "TvInfoLink",
	components: {
		Button,
	},
}
</script>

<style>
.InfoLink--tv {
	background-color: var(--color-tv);
}
</style>