<script setup>
import AudioForm from '@/components/radio/AudioForm.vue';
</script>

<template>
    <div class="Dashboard Dashboard--radio">
        <AudioForm 
            :user-id="userId"
        />
    </div>
</template>

<script>
export default {
	name: "RadioDashboard",
    components: {
        AudioForm
    },
    props: {
        userId: String,
    },
};
</script>

<style>
.Dashboard--radio {
    background-color: rgb(255,0,0);
}
</style>