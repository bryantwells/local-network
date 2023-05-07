<script setup>
import FileList from '@/components/library/FileList.vue';
</script>

<template>
	<div 
		class="Viewer Viewer--library">
		<FileList />
	</div>
</template>

<script>
export default {
	name: "LibraryViewer",
	components: {
		FileList,
	},
}
</script>

<style>
.Viewer--library {
	background-color: rgb(0,0,255);
}
.Viewer--library .Preview-body {
	justify-content: space-between;
}
</style>