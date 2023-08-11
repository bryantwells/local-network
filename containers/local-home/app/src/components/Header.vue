<template>
    <header 
        v-if="$route.name !== 'WelcomePage'"
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
    <header 
        v-else
        class="Header Header--welcome">
        <div class="Header-figure">
            <div class="Header-title">Welcome to The Brownsville Local Network!</div>
        </div>
    </header>
</template>
<script></script>
<style>
.Header {
    display: flex;
    justify-content: space-between;
}
.Header-figure {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
    border-radius: var(--border-radius);
    background-image: url('/img/bg.jpeg');
    background-position: center;
    background-size: cover;
    aspect-ratio: 3 / 2;
    max-height: 90vh;
    padding: 1rem;
    text-align: center;
    color: white;
    text-shadow: 
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library),
		0 0 0.1rem var(--color-library);
}
.Header-button--close {
    -webkit-text-stroke: 0.05rem black;
}
</style>