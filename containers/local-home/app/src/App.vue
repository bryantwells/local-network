<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <Header />
    <main 
        class="Main">
        <router-view 
            :user-id="userId"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            userId: Math.random().toString(36).substring(2,10),
        }
    }
};
</script>

<style>
#app {
    flex: 1;
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 0.5rem;
    padding: 0.5rem;
}
.Main {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>