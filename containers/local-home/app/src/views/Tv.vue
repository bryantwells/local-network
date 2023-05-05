<script setup>
import { mapState } from 'pinia';
import { useTvStore } from '@/stores/tv';
import Preview from '@/components/Preview.vue';
import Dashboard from '@/components/Dashboard.vue';
</script>

<template>
    <Preview
        v-if="activeSource"
        type="tv"
    />
    <Dashboard
        v-else
        type="tv"
        :user-id="userId"
    />
</template>

<script>
export default {
	name: "TvPage",
    components: {
        Preview,
        Dashboard,
    },
    props: {
        userId: String,
    },
    computed: {
		...mapState(useTvStore, ['activeSource']),
	},
};
</script>