<script setup>
import Viewer from '@/components/Viewer.vue';
</script>

<template>
    <Viewer
        type="library"
    />
</template>

<script>
export default {
	name: "LibraryPage",
    inheritAttrs: false,
    components: {
        Viewer,
    },
};
</script>