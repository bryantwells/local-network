<script setup>
import { mapState } from 'pinia'
import { useRadioStore } from '@/stores/radio';
import Dashboard from '@/components/Dashboard.vue';
import ServiceLink from '@/components/ServiceLink.vue';
</script>

<template>
    <Dashboard
        v-if="!activeSource || activeSource.userId ==  userId"
        type="radio"
        :user-id="userId"
    />
    <ServiceLink
        type="radio"
        v-else="!activeRadioSource"
    />
</template>

<script>
export default {
	name: "RadioDashboardPage",
    components: {
        Dashboard
    },
    props: {
        userId: String,
    },
    computed: {
        ...mapState(useRadioStore, ['sources', 'activeSource']),
    }
};
</script>