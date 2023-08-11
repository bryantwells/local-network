<script setup>
import { mapState } from 'pinia';
import { useClientStore } from '@/stores/client';
import { useTvStore } from '@/stores/tv';
import Viewer from '@/components/Viewer.vue';
import Dashboard from '@/components/Dashboard.vue';
import InfoLink from '@/components/InfoLink.vue';
</script>

<template>
    <Viewer
        v-if="activeSource"
        type="tv"
    />
    <Dashboard
        v-else-if="!activeSource && clientIsLocal"
        type="tv"
    />
    <InfoLink
        v-else-if="!activeSource && !clientIsLocal"
        type="tv"
    />
</template>

<script>
export default {
	name: "TvPage",
    components: {
        Viewer,
        InfoLink
    },
    props: {
        userId: String,
    },
    computed: {
        ...mapState(useClientStore, { clientIsLocal: 'isLocal', clientIp: 'ip' }),
		...mapState(useTvStore, ['activeSource']),
	},
};
</script>