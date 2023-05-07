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
	background-color: var(--color-library);
}
</style>