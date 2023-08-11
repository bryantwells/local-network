<script setup>
import { mapState } from 'pinia';
import { useClientStore } from '@/stores/client';
import Dashboard from '@/components/Dashboard.vue';
import Viewer from '@/components/Viewer.vue';
</script>

<template>
    <Dashboard
        v-if="clientIsLocal"
        type="library"
    />
    <Viewer
        v-else-if="!clientIsLocal"
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
    computed: {
        ...mapState(useClientStore, { clientIsLocal: 'isLocal', clientIp: 'ip' }),
	},
};
</script>