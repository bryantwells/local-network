<script setup>
import FileForm from '@/components/library/FileForm.vue';
</script>

<template>
    <div 
		class="Dashboard Dashboard--library">
        <FileForm />
    </div>
</template>

<script>
export default {
	name: "LibraryDashboard",
    components: {
        FileForm
    },
};
</script>

<style>
.Dashboard--library {
    background-color: rgb(0,0,255);
}
</style>