<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
	<router-link
        to="/info"
		class="InfoLink InfoLink--about">
		<div class="InfoLink-title">
			About
		</div>
	</router-link>
</template>

<script>
export default {
	name: "RadioInfoLink",
}
</script>

<style>
.InfoLink.InfoLink--about {
	background-color: var(--color-radio);
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('/img/bg.jpeg');
	background-position: center;
    background-size: cover;
	font-size: 2rem;
	color: white;
	text-shadow: 
		0 0 0.2rem var(--color-about),
		0 0 0.2rem var(--color-about),
		0 0 0.2rem var(--color-about),
		0 0 0.2rem var(--color-about),
		0 0 0.2rem var(--color-about);
}
</style>