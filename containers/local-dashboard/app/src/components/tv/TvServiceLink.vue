<script setup>
	import Button from '@/components/Button.vue';
</script>

<template>
	<a  
		class="ServiceLink ServiceLink--tv"
		:href="targetUrl">
		<div 
			class="ServiceLink-title">
			Local TV is currently active and unavailable for broadcasting.
		</div>
		<Button
			label="Watch Local TV"
			class="Button--alt"
			style="
				--color: var(--color-tv);
			"
		/>
	</a>
</template>

<script>
export default {
	name: "TvServiceLink",
	computed: {
		targetUrl() {
			const protocol = window.location.protocol;
			const HOME_HOSTNAME = import.meta.env.VITE_LOCAL_HOME_HOSTNAME;
			const HOME_PORT = import.meta.env.VITE_LOCAL_HOME_PORT;
			return `${ protocol }//${ HOME_HOSTNAME }:${ HOME_PORT }/tv`;
		}
	}
}
</script>

<style>
.ServiceLink--tv {
	border: 0.1rem solid var(--color-tv);
	color: var(--color-tv);
}
</style>