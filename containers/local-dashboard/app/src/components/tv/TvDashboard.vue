<script setup>
import BodyText from '@/components/BodyText.vue';
</script>

<template>
    <div 
        class="Dashboard Dashboard--tv">
        <BodyText>
            <p>To set up a new streamon Local TV, connect to the local WiFi network and follow these directions:</p>
            <ol>
                <li>
                    Open <a href="https://obsproject.com/" target="blank">OBS Studio</a>.
                </li>
                <li>
                    Select a source by clicking on the file menu.
                </li>
                <li>
                    Open the stream settings and set the following URL as your target: <code>{{ rtmpUrl }}</code>, set your stream key to <code>local-tv</code>
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
    computed: {
        rtmpUrl() {
			const LOCAL_IP = import.meta.env.VITE_LOCAL_IP;
			return `rtmp://${ LOCAL_IP }/live`;
        }
    },
};
</script>

<style>
.Dashboard--tv {
    background-color: rgb(0,255,0);
}
</style>