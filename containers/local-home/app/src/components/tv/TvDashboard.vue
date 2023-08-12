<script setup>
import BodyText from '@/components/BodyText.vue';
</script>

<template>
    <div 
        class="Dashboard Dashboard--tv">
        <BodyText
            color="rgb(0,255,0)">
            <p>Local TV can only be operated from the studio at MGX. To set up a stream, follow these directions:</p>
            <ol>
                <li>
                    Open <a href="https://obsproject.com/" target="blank">OBS Studio</a>.
                </li>
                <li>
                    Select a source by clicking on the file menu.
                </li>
                <li>
                    Open the stream settings and set the following URL as your target: <code>rtmp://127.0.0.1/local-tv</code>.
                </li>
                <li>
                    Click the “Start Stream” button.
                </li>
            </ol>
        </BodyText>
    </div>
</template>

<script>
export default {
	name: "TvDashboard",
    components: {
        BodyText
    },
    props: {
        userId: String,
    },
};
</script>

<style>
.Dashboard--tv {
    background-color: var(--color-tv);
}
</style>