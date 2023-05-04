<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
</script>

<template>
	<router-link
		to="/radio"
		class="PreviewLink PreviewLink--radio">
		<div 
			class="PreviewLink-title">
			Local Radio (Live)
		</div>
		<div 
			class="PreviewLink-icon">
			🔊
		</div>
		<div 
			class="PreviewLink-subTitle">
			{{ activeSource.metadata.title }}
		</div>
	</router-link>
</template>

<script>
export default {
	name: "RadioPreviewLink",
	computed: {
		...mapState(useRadioStore, ['sources', 'activeSource']),
	},
}
</script>

<style>
.PreviewLink--radio {
	background-color: rgb(255,0,0);
}
.PreviewLink--radio .PreviewLink-icon {
	text-align: center;
	font-size: 3rem;
}
</style>