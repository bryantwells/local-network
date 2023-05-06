<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import AudioPlayer from '@/components/radio/AudioPlayer.vue';
import DashboardLink from '@/components/DashboardLink.vue';
import BodyText from '@/components/BodyText.vue';
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
		<DashboardLink 
            v-else-if="hostnameIsLocalIp"
            :type="'radio'"
        />
		<BodyText>
			<p>No Local Radio stream is currently available. Visit the local network to create one.</p>
		</BodyText>
	</div>
</template>

<script>
export default {
	name: "RadioPreview",
	components: {
		AudioPlayer,
		DashboardLink,
	},
	computed: {
		...mapState(useRadioStore, ['activeSource']),
		hostnameIsLocalIp() {
			return window.location.hostname == import.meta.env.VITE_LOCAL_IP;
		},
	},
}
</script>

<style>
.Preview--radio {
	background-color: rgb(255,0,0);
}
</style>