<script setup>
import AudioPlayer from './components/AudioPlayer.vue';
import NavComponent from './components/Nav.vue';
import UploadForm from './components/UploadForm.vue';
</script>

<template>
    <main class="Main">
        <header class="Main-header">
            <NavComponent />
        </header>
        <div class="Main-body">
            <UploadForm
                v-if="streamIsAvailable"
                :user-id="userId" />
            <AudioPlayer
                v-else
                :activeSource="activeSource"
            />
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            userId: Math.random().toString(36).substring(2,10),
            sourceList: [],
        }
    },
    computed: {
        activeSource() {
            return this.sourceList.find((source) => {
                return source.mountId == 'local-radio';
            });
        },
        activeUserId() {
            return (this.activeSource)
                ? this.activeSource.userId
                : null;
        },
        streamIsAvailable() {
            return this.activeUserId == this.userId || this.activeUserId == null;
        }
    },
    sockets: {
        sourceList(data) {
            this.sourceList = data;
        }
    }
};
</script>

<style>
.Main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.Main-header {
    padding: 1rem;
}
.Main-body {
    padding: 1rem;
}
@media (max-width: 1000px) {
    .Main {
        grid-template-columns: 1fr;
    }
}
</style>