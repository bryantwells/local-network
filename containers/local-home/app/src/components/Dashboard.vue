<script setup>
import RadioDashboard from '@/components/radio/RadioDashboard.vue';
import TvDashboard from '@/components/tv/TvDashboard.vue';
import LibraryDashboard from '@/components/library/LibraryDashboard.vue';
</script>

<template>
	<RadioDashboard 
		v-if="type == 'radio'"
		:user-id="userId" />
	<TvDashboard 
		v-if="type == 'tv'" />
	<LibraryDashboard 
		v-if="type == 'library'" />
</template>

<script>
export default {
	name: "Dashboard",
	components: {
		RadioDashboard,
		TvDashboard,
		LibraryDashboard
	},
	props: {
		type: String,
		userId: String,
	}
}
</script>

<style>
.Dashboard {
	padding: 0.5rem;
	min-height: 100%;
	border-radius: 0.5rem;
}
.Dashboard-bodyText p, 
.Dashboard-bodyText ol,
.Dashboard-bodyText li {
	margin: 1rem 0;
}
.Dashboard-bodyText p:first-child,
.Dashboard-bodyText ol:first-child {
	margin-top: 0;
}
.Dashboard-bodyText p:last-child,
.Dashboard-bodyText ol:last-child,
.Dashboard-bodyText li:last-child {
	margin-bottom: 0;
}
.Dashboard-bodyText ol {
	counter-reset: counter;
	margin: 1rem 0;
}
.Dashboard-bodyText ol li {
	counter-increment: counter;
}
.Dashboard-bodyText ol li::before {
	content: counter(counter);
	display: block;
}
.Dashboard-bodyText a {
	text-decoration: underline;
	text-underline-offset: 0.1rem;
}
.Dashboard-bodyText code {
	display: inline;
	background-color: black;
	border-radius: 0.25rem;
	padding: 0.125rem 0.25rem;
	color: white;
	word-break: break-all;
}
</style>