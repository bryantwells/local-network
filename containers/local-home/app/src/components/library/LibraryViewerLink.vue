<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>


<template>
	<div 
		class="ViewerLink ViewerLink--library"
		:style="{
			backgroundImage: (files.length) ? `url('${ rootUrl }/files/${ latestFile.path }')` : '',
		}">
		<div 
			class="ViewerLink-title">
			Local Archive uses {{ totalSizeInMb }}mb of memory. Connect to the BLN WiFi hotspot to contribute.
		</div>
		<div 
			class="ViewerLink-subTitle">
		</div>
	</div>
</template>

<script>
export default {
	name: "LibraryViewerLink",
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
		totalSizeInMb() {
			return (this.totalSize) ? Math.round((this.totalSize / 1000000) * 100)/100 : 0;
		}
	},
}
</script>

<style>
.ViewerLink.ViewerLink--library {
	background-size: cover;
	background-position: center;
	white-space: normal;
	color: white;
	text-shadow: 
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library);
}
.ViewerLink--library .ViewerLink-title,
.ViewerLink--library .ViewerLink-subTitle {
	overflow: visible;
	white-space: normal;
}
</style>