<script setup>
import Dashboard from '@/components/Dashboard.vue';
</script>

<template>
    <Dashboard
        type="radio"
        :user-id="userId"
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
};
</script>