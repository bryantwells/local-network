<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import { useTvStore } from '@/stores/tv';
import { useLibraryStore } from '@/stores/library';

import PreviewLink from '@/components/PreviewLink.vue';
import DashboardLink from '@/components/DashboardLink.vue';
</script>

<template>
    <section class="Page Page--home">
        <PreviewLink 
            v-if="activeRadioSource" 
            :type="'radio'"
        />
        <DashboardLink 
            v-else 
            :type="'radio'"
        />
        <PreviewLink 
            v-if="activeTvSource" 
            :type="'tv'"
        />
        <DashboardLink 
            v-else 
            :type="'tv'"
        />
        <PreviewLink 
            :type="'library'"
        />
    </section>
</template>

<script>
export default {
	name: "HomePage",
    components: {
        PreviewLink,
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
    gap: 0.5rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
}
</style>