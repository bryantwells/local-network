<script setup>
import { mapState } from 'pinia';
import { useRadioStore } from '@/stores/radio';
import Preview from '@/components/Preview.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
</script>

<template>
    <Preview
        v-if="activeSource"
        type="radio"
    />
    <ErrorMessage
        else
        message="No active stream"
    />
</template>

<script>
export default {
	name: "RadioPreviewPage",
    components: {
        Preview
    },
    props: {
        userId: String,
    },
    computed: {
		...mapState(useRadioStore, ['activeSource']),
	},
};
</script>