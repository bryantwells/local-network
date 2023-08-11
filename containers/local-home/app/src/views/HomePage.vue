<script setup>
import { mapState } from 'pinia';
import { useClientStore } from '@/stores/client';
import { useRadioStore } from '@/stores/radio';
import { useTvStore } from '@/stores/tv';
import { useLibraryStore } from '@/stores/library';

import ViewerLink from '@/components/ViewerLink.vue';
import DashboardLink from '@/components/DashboardLink.vue';
import InfoLink from '@/components/InfoLink.vue';
</script>

<template>
    <section class="Page Page--home">

        <ViewerLink 
            v-if="activeRadioSource" 
            type="radio"
        />
        <DashboardLink
            v-else-if="!activeRadioSource && clientIsLocal"
            type="radio"
        />
        <InfoLink
            v-else-if="!activeRadioSource && !clientIsLocal"
            type="radio"
        />

        <ViewerLink 
            v-if="activeTvSource" 
            type="tv"
        />
        <DashboardLink
            v-else-if="!activeTvSource && clientIsLocal"
            type="tv"
        />
        <InfoLink
            v-else-if="!activeRadioSource && !clientIsLocal"
            type="tv"
        />

        
        <DashboardLink
            v-if="clientIsLocal"
            type="library"
        />
        <ViewerLink 
            v-else-if="clientIsLocal"
            type="library"
        />

    </section>
</template>

<script>
export default {
	name: "HomePage",
    components: {
        InfoLink,
    },
    computed: {
        ...mapState(useClientStore, { clientIsLocal: 'isLocal', clientIp: 'ip' }),
        ...mapState(useRadioStore, { radioSources: 'sources', activeRadioSource: 'activeSource' }),
        ...mapState(useTvStore, { tvSources: 'sources', activeTvSource: 'activeSource' }),
        ...mapState(useLibraryStore, { libraryFiles: 'files' }),
    },
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
@media (max-width: 600px) {
    .Page--home {
        grid-template-columns: unset;
        grid-template-rows: 1fr 1fr 1fr;
    }
}
</style>