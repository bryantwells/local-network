<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import AudioPlayer from '@/components/radio/AudioPlayer.vue'
</script>

<template>
	<div 
		class="Preview Preview--radio">
		<div 
			v-if="activeSource"
			class="Preview-body">
			<div 
				class="Preview-meta">
				<span 
					class="Preview-title">
					Now Playing on Local Radio: 
					<br>{{ activeSource.metadata.title }} (Live)
				</span>
			</div>
			<AudioPlayer 
				:active-source="activeSource"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "RadioPreview",
	components: {
		AudioPlayer,
	},
	computed: {
		...mapState(useRadioStore, ['activeSource']),
	},
}
</script>

<style>
.Preview--radio {
	background-color: rgb(255,0,0);
}
</style>