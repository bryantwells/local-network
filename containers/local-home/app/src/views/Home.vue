<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import { useTvStore } from '@/stores/tv';
import { useLibraryStore } from '@/stores/library';

import PreviewLink from '@/components/PreviewLink.vue';
import DashboardLink from '@/components/DashboardLink.vue';
import BodyText from '@/components/BodyText.vue';
</script>

<template>
    <section class="Page Page--home">
        <!-- Radio -->
        <PreviewLink 
            v-if="activeRadioSource" 
            :type="'radio'"
        />
        <DashboardLink 
            v-else-if="!activeRadioSource && hostnameIsLocalIp" 
            :type="'radio'"
        />
        <BodyText
            v-else
            color="rgb(255,0,0)">
            <p>No active Local Radio broadcasts.</p>
        </BodyText>
        <!-- TV -->
        <PreviewLink 
            v-if="activeTvSource" 
            :type="'tv'"
        />
        <DashboardLink 
            v-else-if="!activeTvSource && hostnameIsLocalIp"
            :type="'tv'"
        />
        <BodyText
            v-else
            color="rgb(0,255,0)">
            <p>No active Local TV broadcasts.</p>
        </BodyText>
        <!-- Library -->
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
        BodyText,
    },
    computed: {
        ...mapState(useRadioStore, { radioSources: 'sources', activeRadioSource: 'activeSource' }),
        ...mapState(useTvStore, { tvSources: 'sources', activeTvSource: 'activeSource' }),
        ...mapState(useLibraryStore, { libraryFiles: 'files' }),
        hostnameIsLocalIp() {
            return import.meta.env.VITE_LOCAL_IP == window.location.hostname;
        },
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