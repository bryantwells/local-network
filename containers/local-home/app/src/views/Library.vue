<script setup>
import Preview from '@/components/Preview.vue';
</script>

<template>
    <Preview
        type="library"
    />
</template>

<script>
export default {
	name: "LibraryPage",
    components: {
        Preview,
    },
    props: {
        userId: String,
    }
};
</script>