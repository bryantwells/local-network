<script setup>
import RadioDashboardPreview from '@/components/radio/RadioDashboardPreview.vue';
import TvDashboardPreview from '@/components/tv/TvDashboardPreview.vue';
import LibraryDashboardPreview from '@/components/library/LibraryDashboardPreview.vue';
</script>

<template>
    <section class="DashboardPreviewList">
        <RadioDashboardPreview />
        <TvDashboardPreview />
        <LibraryDashboardPreview />
    </section>
</template>

<script>
export default {
	name: "DashboardPreviewList",
    components: {
        RadioDashboardPreview,
        TvDashboardPreview,
        LibraryDashboardPreview,
    },
};
</script>

<style>
.DashboardPreviewList {
    flex: 1;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.DashboardPreview {
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 0.5rem;
}
.DashboardPreview-title {
    flex: 1;
}
.DashboardPreview-button {
    background-color: black;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
}
</style>