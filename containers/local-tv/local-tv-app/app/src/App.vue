<script setup>
    import VideoPlayer from './components/VideoPlayer.vue';
    import NavComponent from './components/Nav.vue';
</script>

<template>
    <main class="Main">
        <NavComponent />
        <VideoPlayer 
            v-for="sourceData in sourceList"
            :sourceData="sourceData"
        />
        <section class="Description">
            <p>
                Welcome to Local TV at MGX! The video above is now streaming live from the Project EATS farm at Chester and DuMont. If you would like to contribute, please contact peln@project-eats.org for sign up times and more information.
            </p>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            sourceList: [],
        }
    },
    components: {
        VideoPlayer,
        NavComponent,
    },
    sockets: {
        sourceList(data) {
            this.sourceList = data;
        }
    },
};
</script>

<style>
.Description {
    max-width: 600px;
    padding: 1rem;
}
</style>