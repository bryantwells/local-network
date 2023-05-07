<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
</script>

<template>
	<div class="FileList">
		<header class="FileList-header">
			Index Of /
		</header>
		<div class="FileList-container">
			<ul
				class="FileList-body">
				<li 
					v-for="(file, i) in files"
					:key="i"
					class="FileList-item">
					<a 
						class="FileList-link"
						:href="`${ rootUrl }/files/${ file.path }`"
						target="blank">
						./{{ file.path }}
					</a>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
export default {
	name: "FileList",
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
	},
}
</script>

<style>
.FileList {
	display: flex;
	flex-direction: column;
	min-height: 100%;
}
.FileList-header {
	margin: 0.5rem 0 1rem 0;
	font-family: monospace;
}
.FileList-container {
	flex: 1;
}
.FileList-body {
    display: grid;
	font-family: monospace;
	align-items: start;
}
.FileList-item {
	border-top: 0.1rem solid black;
	cursor: pointer;
}
.FileList-item:last-child {
	border-bottom: 0.1rem solid black;
}
.FileList-item:hover {
	color: white;
	border-color: white;
}
.FileList-item:hover + .FileList-item {
	border-top-color: white;
}
.FileList-link {
	padding: 0.25rem 0;
	display: block;
}
.FileList .Button {
	margin-top: 0.5rem;
	position: sticky;
	bottom: 0.5rem;
}
</style>