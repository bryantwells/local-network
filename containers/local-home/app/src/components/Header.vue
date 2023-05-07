<template>
    <header 
        class="Header">
        <span 
            class="Header-title">
            {{ $route.meta.title }}
        </span>
        <router-link 
			v-if="$route.path !== '/'"
            class="Header-button Header-button--close"
            to="/">
            ╳
        </router-link>
    </header>
</template>
<script></script>
<style>
.Header {
    display: flex;
    justify-content: space-between;
}
.Header-button--close {
    -webkit-text-stroke: 0.05rem black;
}
</style>