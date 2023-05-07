<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import Viewer from '@/components/Viewer.vue';
import InfoLink from '@/components/InfoLink.vue';
</script>

<template>
    <Viewer
        v-if="activeSource"
        type="radio"
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
		...mapState(useRadioStore, ['activeSource', 'activeSourceExists']),
	},
};
</script>