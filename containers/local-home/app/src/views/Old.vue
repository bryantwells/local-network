<script setup>
import AudioPlayer from './components/AudioPlayer.vue';
import NavComponent from './components/Nav.vue';
import VideoPlayer from './components/VideoPlayer.vue';
</script>

<template>
    <main class="Main">
        <header class="Main-header">
            <NavComponent />
            <div class="Main-description">
                <p>
                    Created by and for Brownsville residents, the Brownsville Local Network (BLN) is a server localted at the Project EATS farm at DuMont and Chester that streams sound and platforms image, text, visual, and graphic-based programs including music, video, photographs, drawings, paintings, Brownsville news and information, and real or imagined stories
                </p>
            </div>
            
        </header>
        <div class="Main-body">
            <section class="Main-preview Main-preview--tv">
                <a :href="tvUrl">
                    <figure class="Main-figure">
                        <figcaption class="Main-caption">
                            Local TV
                        </figcaption>
                        <div 
                            v-if="!tvSourceList.length"
                            class="Main-placeholder Main-placeholder--tv">
                            No Active Broadcast
                        </div>
                        <div 
                            v-if="tvSourceList.length"
                            class="Main-previewMedia">
                            <VideoPlayer
                                :sourceData="tvSourceList[0]"
                                :isPreview="true" />
                        </div>
                    </figure>
                </a>
            </section>
            <section class="Main-preview Main-preview--library">
                <a :href="radioUrl">
                    <figure class="Main-figure">
                        <figcaption class="Main-caption">
                            Local Radio
                        </figcaption>         
                        <div 
                            v-if="!radioSourceList.length"
                            class="Main-placeholder Main-placeholder--radio">
                            No Active Broadcast
                        </div>
                        <div 
                            v-if="radioSourceList.length"
                            class="Main-previewMedia">
                            <AudioPlayer />
                        </div>
                    </figure>
                </a>
            </section>
            <section class="Main-preview Main-preview--library">
                <a :href="libraryUrl">
                    <figure class="Main-figure">
                        <figcaption class="Main-caption">
                            Local Library
                        </figcaption>         
                        <div 
                            v-if="libraryStats"
                            class="Main-previewMedia">
                            <img 
                                :src="`${ libraryUrl }/${ libraryStats.path }`" 
                                alt="">
                            <p>
                                {{ libraryStats.path }}
                            </p>
                        </div>
                    </figure>
                </a>
            </section>
        </div>
        
    </main>
</template>

<script>
export default {
    components: {
        NavComponent,
        VideoPlayer,
        AudioPlayer
    },
    data() {
        return {
            radioSourceList: [],
            tvSourceList: [],
            libraryStats: null,
        }
    },
    computed: {
        radioUrl() {
            const protocol = window.location.protocol;
            const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME;
            const RADIO_APP_PORT = import.meta.env.VITE_LOCAL_RADIO_APP_PORT;
            return `${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_APP_PORT }`;
        },
        tvUrl() {
            const protocol = window.location.protocol;
            const TV_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME;
            const TV_APP_PORT = import.meta.env.VITE_LOCAL_TV_APP_PORT;
            return `${ protocol }//${ TV_HOSTNAME }:${ TV_APP_PORT }`;
        },
        libraryUrl() {
            const protocol = window.location.protocol;
            const LIBRARY_HOSTNAME = import.meta.env.VITE_LOCAL_LIBRARY_HOSTNAME;
            const LIBRARY_PORT = import.meta.env.VITE_LOCAL_LIBRARY_PORT;
            return `${ protocol }//${ LIBRARY_HOSTNAME }:${ LIBRARY_PORT }`;
        },
    },
    mounted() {
        this.getStats();
    },
    methods: {
        getStats() {
            // protocol
            const protocol = window.location.protocol;

            // radio
            const RADIO_HOSTNAME = import.meta.env.VITE_LOCAL_RADIO_HOSTNAME;
            const RADIO_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_RADIO_MIDDLEWARE_PORT;
            const radioApi = `${ protocol }//${ RADIO_HOSTNAME }:${ RADIO_MIDDLEWARE_PORT }/stats`;
            this.axios.get(radioApi)
                .then((response) => {
                    this.radioSourceList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });

            // tv
            const TV_HOSTNAME = import.meta.env.VITE_LOCAL_TV_HOSTNAME;
            const TV_MIDDLEWARE_PORT = import.meta.env.VITE_LOCAL_TV_MIDDLEWARE_PORT;
            const tvApi = `${ protocol }//${ TV_HOSTNAME }:${ TV_MIDDLEWARE_PORT }/stats`;
            this.axios.get(tvApi)
                .then((response) => {
                    this.tvSourceList = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });

            // library
            const LIBRARY_HOSTNAME = import.meta.env.VITE_LOCAL_LIBRARY_HOSTNAME;
            const LIBRARY_PORT = import.meta.env.VITE_LOCAL_LIBRARY_PORT;
            const libraryApi = `${ protocol }//${ LIBRARY_HOSTNAME }:${ LIBRARY_PORT }/scripts/stats.php`;
            this.axios.get(libraryApi)
                .then((response) => {
                    this.libraryStats = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style>
.Main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.Main-header {
    padding: 1rem;
}
.Main-header p {
    margin-bottom: 1rem;
}
@media (max-width: 1000px) {
    .Main {
        grid-template-columns: 1fr;
    }
}
.Main-preview {
    padding: 1rem;
}
.Main-placeholder {
    padding: 1rem;
    background: black;
    color: white;
    border-radius: 0.25rem;
    display: flex;
    text-decoration: none;
}
.Main-placeholder--tv {
    aspect-ratio: 16/9;
}
.Main-caption {
    margin-bottom: 0.5rem;
    text-decoration: underline;
}
</style>