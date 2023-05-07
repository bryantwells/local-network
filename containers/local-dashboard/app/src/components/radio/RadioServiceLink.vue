<script setup>
	import Button from '@/components/Button.vue';
</script>

<template>
	<a  
		class="ServiceLink ServiceLink--radio"
		:href="targetUrl">
		<div 
			class="ServiceLink-title">
			Local Radio is currently active and unavailable for broadcasting.
		</div>
		<Button
			label="Listen to Local Radio"
			class="Button--alt"
			style="
				--color: var(--color-radio)
			"
		/>
	</a>
</template>

<script>
export default {
	name: "RadioServiceLink",
	computed: {
		targetUrl() {
			const protocol = window.location.protocol;
			const HOME_HOSTNAME = import.meta.env.VITE_LOCAL_HOME_HOSTNAME;
			const HOME_PORT = import.meta.env.VITE_LOCAL_HOME_PORT;
			return `${ protocol }//${ HOME_HOSTNAME }:${ HOME_PORT }/radio`;
		}
	}
}
</script>

<style>
.ServiceLink--radio {
	border: 0.1rem solid var(--color-radio);
	color: var(--color-radio);
}
</style>