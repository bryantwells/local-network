<script setup>
import BodyText from '@/components/BodyText.vue';
</script>

<template>
	<section class="Page Page--info">
		<BodyText>
			<p>Welcome to the Brownsville Local Network! This is an internet platform created for and by Brownsville residents.</p> 
			<p>Residents are invited to broadcast and share art, stories, and resources via the BLN. To edit this site's contents, just connect to one of our free WiFi hotspots (named "Brownsville Local Network") and visit this URL (bln.projectearts.org).</p>
			<p>If you would like support in making, scheduling, or promoting your own broadcast, or if you would like to participate in one of our free technical and creative workshops, please email us at <a href="mailto:bln@projecteats.org">bln@projecteats.org</a>.</p>
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
	background-color: var(--color-about);
	padding: var(--space-sm);
	border-radius: var(--border-radius);
	min-height: 100%;
}
</style>