<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
import Viewer from '@/components/Viewer.vue';
import InfoLink from '@/components/InfoLink.vue';
</script>

<template>
    <Viewer
        v-if="activeSource"
        type="tv"
    />
    <InfoLink
        v-else
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
		...mapState(useTvStore, ['activeSource']),
	},
};
</script>