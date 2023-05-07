<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
</script>

<template>
	<router-link
		to="/radio"
		class="ViewerLink ViewerLink--radio">
		<div 
			class="ViewerLink-title">
			Local Radio
		</div>
		<div 
			class="ViewerLink-icon">
			🔊
		</div>
		<div 
			class="ViewerLink-subTitle">
			{{ activeSource.metadata.title || 'Untitled' }} (Live)
		</div>
	</router-link>
</template>

<script>
export default {
	name: "RadioViewerLink",
	computed: {
		...mapState(useRadioStore, ['sources', 'activeSource']),
	},
}
</script>

<style>
.ViewerLink--radio {
	background-color: rgb(255,0,0);
}
.ViewerLink--radio .ViewerLink-icon {
	text-align: center;
	font-size: 2rem;
}
</style>