<script setup>
import { mapState } from 'pinia';
import { useLibraryStore } from '@/stores/library';
import Button from '@/components/Button.vue';
</script>

<template>
	<div class="FileList">
		<header class="FileList-header">
			Index Of /{{ root }}
		</header>
		<div class="FileList-container">
			<ul
				class="FileList-body">
				<li 
					v-for="(file, i) in targetDir"
					:key="i"
					class="FileList-item">
					<a 
						v-if="!file.isDir"
						class="FileList-link"
						:href="`${ rootUrl }/files${ file.path }`"
						target="blank">
						<div class="FileList-icon">
							<img class="FileList-image" :src="`${ rootUrl }/files${ file.path }`" alt="">
						</div>
						<span class="FileList-label">./{{ file.name }}</span>
					</a>
					<router-link 
						v-else
						class="FileList-link"
						:to="`/library${ file.path }`">
						<div class="FileList-icon"></div>
						<span class="FileList-label">./{{ file.name }}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<Button 
			v-if="root"
            label="Upload To The Archive"
            style="
                --color: var(--color-library);
            "
            @click="goToUploadForm"
        />
	</div>
	
</template>

<script>
export default {
	name: "FileList",
	components: {
		Button
	},
	props: {
		root: String,
	},
	computed: {
		...mapState(useLibraryStore, ['files', 'rootUrl', 'latestFile', 'totalSize']),
		targetDir() {
			return this.files.length
				? this.root == ""
					? this.files
					: this.files.find((f) => f.isDir && f.name == this.root).files
				: [];
		}
	},
	methods: {
		goToUploadForm() {
			this.$router.push('/library/upload');
		}
	}
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
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: var(--space-sm);
}
.FileList-item {
	cursor: pointer;
}
.FileList-item:hover {
	color: white;
}
.FileList-link {
	padding: 0.25rem 0;
	display: block;
	max-width: calc(100vw - var(--space-sm) * 4);
	width:0;
	min-width:100%;
	font-size: 0.75rem;
}
.FileList-icon {
	aspect-ratio: 1 / 1;
	border: 0.1rem solid currentColor;
	border-radius: 0.2rem;
	margin-bottom: var(--space-sm);
}
.FileList-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	border-radius: 0.25rem;
}
.FileList-label {
	width:0;
	min-width:100%;
	text-overflow: ellipsis;
	display: block;
	overflow: hidden;
	text-align: center;
}
.FileList .Button {
	margin-top: 0.5rem;
	position: sticky;
	bottom: 0.5rem;
}
</style>