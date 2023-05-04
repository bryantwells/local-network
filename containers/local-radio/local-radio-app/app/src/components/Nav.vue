<template>
	<div class="Nav">
		<ul class="Nav-list">
			<li class="Nav-item Nav-item--link">
				<a 
					:href="homeUrl" 
					class="Nav-link">
					PELN @ MGX
				</a>
			</li>
			<li class="Nav-item">
				Local Radio
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "NavComponent",
	computed: {
        homeUrl() {
            const protocol = window.location.protocol;
            const HOME_HOSTNAME = import.meta.env.VITE_LOCAL_HOME_HOSTNAME;
            const HOME_PORT = import.meta.env.VITE_LOCAL_HOME_PORT;
            return `${ protocol }//${ HOME_HOSTNAME }:${ HOME_PORT }`;
        },
    },
}
</script>

<style>
.Nav-item {
	display: inline-block;
}
.Nav-item--link::after {
	content: '▸';
	display: inline-block;
	margin: 0 0.5rem;
}
</style>