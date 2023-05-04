<template>
    <div class="Loader">
        {{ currentFrame }}
    </div>
</template>

<script>
export default {
    name: "Loader",
    data() {
        return {
            frames: ['▙','▛','▜','▟'],
            progress: 0,
        }
    },
    computed: {
        currentFrame() {
            return this.frames[this.progress % this.frames.length];
        },
    },
    created() {
        setInterval(() => {
            this.progress++;
        }, 250);
    },
};
</script>