<script setup>
import FileList from '@/components/library/FileList.vue';
</script>

<template>
    <div 
		class="LibraryIndex">
        <FileList />
    </div>
</template>

<script>
export default {
	name: "LibraryDashboard",
    components: {
        FileList
    },
};
</script>

<style>
.LibraryIndex {
    background-color: var(--color-library);
    padding: var(--space-sm);
    border-radius: var(--border-radius);
    min-height: 100%;
    color: black;
}
</style>