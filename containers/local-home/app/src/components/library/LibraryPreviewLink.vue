<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>


<template>
	<router-link 
		class="PreviewLink PreviewLink--library"
		to="/library"
		:style="{
			backgroundImage: (files.length) ? `url('${ rootUrl }/files/${ latestFile.path }')` : '',
		}">
		<div 
			class="PreviewLink-title">
			Local Library is hosting {{ totalSizeInMb }}mb of community media.
		</div>
		<div
			class="PreviewLink-button">
			View The Archive
		</div>
	</router-link>
</template>

<script>
export default {
	name: "LibraryPreviewLink",
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
		totalSizeInMb() {
			return (this.totalSize) ? Math.round((this.totalSize / 1000000) * 100)/100 : 0;
		}
	},
}
</script>

<style>
.PreviewLink.PreviewLink--library {
	background-size: cover;
	white-space: normal;
	color: white;
	text-shadow: 
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255),
		0 0 0.15rem rgb(0,0,255);
}
.PreviewLink--library .PreviewLink-title {
	overflow: visible;
}

.PreviewLink--library .PreviewLink-button {
	text-shadow: none;
}
</style>