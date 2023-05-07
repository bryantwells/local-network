<script setup>
import BodyText from '@/components/BodyText.vue';
</script>

<template>
	<section class="Page Page--info">
		<BodyText>
			Welcome to the Project EATS Local Network at MGX! This website is hosted on the farm at Chester and DuMont. You are invited to listen and broadcast audio, video, and share digital resources.
		</BodyText>
	</section>
</template>

<script>
export default {
	name: "InfoPage",
    components: {
        BodyText,
    },
};
</script>

<style>
.Page--info{
	background-color: lightgrey;
	padding: var(--space-sm);
	border-radius: var(--border-radius);
	min-height: 100%;
}
</style>