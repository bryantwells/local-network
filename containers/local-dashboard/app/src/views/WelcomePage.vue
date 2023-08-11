<script setup>
import BodyText from '../components/BodyText.vue';
import Collapsible from '../components/Collapsible.vue';
</script>

<template>
	<section 
		class="Page Page--welcome">
		<Collapsible
			title="About The Network">
			<template #preview>
				<BodyText>
					<p>
						The Brownsville Local Network is an internet platform created for and by Brownsville residents...
					</p>
				</BodyText>
			</template>
			<template #body>
				<BodyText>
					<p>The Brownsville Local Network is an internet platform created for and by Brownsville residents.</p> 
					<p>Visitors are invited to view and listen to content created by residents on the BLN Home Page. </p>
					<p>Residents are invited to broadcast and share and your art, stories, and resources via the BLN Dashboard. The BLN Dashboard can be accessed by visiting one of our <a target="blank" href="https://www.google.com/maps/d/embed?mid=1VwmdA5ZYyVcjLzpRbWUuwDc9j8er5Y8&ehbc=2E312F">free WiFi hotspots</a>.</p>
					<p>If you would like support in making, scheduling, or promoting your own broadcast, or If you would like to participate in one of our free technical and creative workshops, please email us at <a href="mailto:bln@projecteats.org">bln@projecteats.org</a>.</p>
				</BodyText>
			</template>
		</Collapsible>
		<section 
			class="Page-footer">
			<a 
				class="Page-button"
				:href="`//${ homeUrl }/home`">
				Go to the Home Page
			</a>
			<router-link 
				class="Page-button"
				to="/home">
				Go to the Dashboard
			</router-link>
		</section>
	</section>
</template>

<script>
export default {
	name: "WelcomePage",
    components: {
        BodyText,
		Collapsible
    },
	data() {
		return {
			homeUrl: import.meta.env.VITE_HOSTNAME
		}
	},
};
</script>

<style>
.Page--welcome{
	padding: var(--space-sm);
	min-height: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;
}
.Page--welcome .Page-button {
	min-height: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--border-radius);
	padding: var(--space-sm);
	border: 0.1rem solid white;
	text-align: center;
	flex: 1;
}
.Page--welcome .Page-button:hover {
	background-color: white;
	color: black;
}
.Page--welcome .Page-footer {
	display: flex;
	gap: var(--space-sm);
}
</style>