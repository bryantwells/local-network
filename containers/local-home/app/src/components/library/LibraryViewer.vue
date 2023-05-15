<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>

<template>
	<div 
		class="Viewer Viewer--library"
		:style="{
			backgroundImage: (files.length) ? `url('${ rootUrl }/files/${ latestFile.path }')` : '',
		}">
		<div class="Viewer-title">
			Latest Uploaded:
			<br>./{{ (latestFile) ? latestFile.path : '' }}
		</div>
		<div class="Viewer-subTitle">
			{{ latestSizeInMb }}mb
		</div>
	</div>
</template>

<script>
export default {
	name: "LibraryViewer",
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
		totalSizeInMb() {
			return (this.totalSize) ? Math.round((this.totalSize / 1000000) * 100)/100 : 0;
		},
		latestSizeInMb() {
			return (this.latestFile) ? Math.round((this.latestFile.size / 1000000) * 100)/100 : 0;
		}
	},
}
</script>

<style>
.Viewer--library {
	background-color: var(--color-library);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-size: cover;
	background-position: center;
	color: white;
	text-shadow: 
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library);
}
</style>