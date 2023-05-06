<script setup>
import FileList from '@/components/library/FileList.vue';
</script>

<template>
	<div 
		class="Preview Preview--library">
		<div class="Preview-body">
			<FileList />
		</div>
	</div>
</template>

<script>
export default {
	name: "LibraryPreview",
	components: {
		FileList,
	},
}
</script>

<style>
.Preview--library {
	background-color: rgb(0,0,255);
}
.Preview--library .Preview-body {
	justify-content: space-between;
}
</style>