<script setup>
import { mapState } from 'pinia';
import { useClientStore } from '@/stores/client';
import { useRadioStore } from '@/stores/radio';
import Viewer from '@/components/Viewer.vue';
import Dashboard from '@/components/Dashboard.vue';
import InfoLink from '@/components/InfoLink.vue';
</script>

<template>
    <Viewer
        v-if="activeSource && activeSource.userId !== userId"
        type="radio"
    />
    <Dashboard
        v-else-if="(!activeSource || activeSource.userId == userId) && clientIsLocal"
        type="radio"
        :user-id="userId"
    />
    <InfoLink
        v-else
        type="radio"
    />
</template>

<script>
export default {
	name: "RadioPage",
    components: {
        Viewer,
        InfoLink
    },
    props: {
        userId: String,
    },
    computed: {
        ...mapState(useClientStore, { clientIsLocal: 'isLocal', clientIp: 'ip' }),
		...mapState(useRadioStore, ['activeSource', 'activeSourceExists']),
	},
};
</script>