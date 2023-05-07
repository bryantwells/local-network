<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import { useTvStore } from '@/stores/tv';
import { useLibraryStore } from '@/stores/library';

import DashboardLink from '@/components/DashboardLink.vue';
import ServiceLink from '@/components/ServiceLink.vue';
</script>

<template>
    <section 
        class="Page Page--home">
        <DashboardLink 
            type="radio"
            v-if="!activeRadioSource"
        />
        <ServiceLink
            type="radio"
            v-else="!activeRadioSource"
        />
        <DashboardLink 
            type="tv"
            v-if="!activeTvSource"
        />
        <ServiceLink
            type="tv"
            v-else
        />
        <DashboardLink 
            type="library"
        />
    </section>
</template>

<script>
export default {
	name: "HomePage",
    components: {
        DashboardLink,
    },
    computed: {
        ...mapState(useRadioStore, { radioSources: 'sources', activeRadioSource: 'activeSource' }),
        ...mapState(useTvStore, { tvSources: 'sources', activeTvSource: 'activeSource' }),
        ...mapState(useLibraryStore, { libraryFiles: 'files' }),
    }
};
</script>

<style>
.Page--home {
    flex: 1;
    display: grid;
    gap: var(--space-sm);
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
}
@media (max-width: 600px) {
    .Page--home {
        grid-template-columns: unset;
        grid-template-rows: 1fr 1fr 1fr;
    }
}
</style>