<script setup>
import { mapActions } from 'pinia';
import { useLibraryStore } from '@/stores/library';
import Button from '@/components/Button.vue';
</script>

<template>
    <div 
        class="FileForm">
        <header 
            class="FileForm-header">
            To upload, drag a file or click on the box below:
        </header>
        <div 
            class="FileForm-inputContainer"
            :class="{
                'is-active': dropZoneIsActive,
            }">
            <input 
                class="FileForm-input"
                type="file"
                @dragenter.prevent="activateDropZone" 
                @drop.prevent="handleDrop"
                @change="handleChange">
            <div 
                v-if="stagedFile"
                class="FileForm-label"
                :class="{
                    'is-active': dropZoneIsActive,
                }">
                {{ stagedFile.name }}
            </div>
        </div>
        <Button 
            label="Upload"
            @click="uploadStagedFile"
        />
    </div>
</template>

<script>
export default {
	name: "FileForm",
    data() {
        return {
            dropZoneIsActive: false,
            stagedFile: null,
        }
    },
    methods: {
        ...mapActions(useLibraryStore, ['getFiles', 'uploadFile']),
        handleDrop(e) {
            if (e.dataTransfer.files[0]) {
                this.stagedFile = e.dataTransfer.files[0];
            }
        },
        handleChange(e) {
            if (e.target.files[0]) {
                this.stagedFile = e.target.files[0];
            }
        },
        activateDropZone() {
            this.dropZoneIsActive = true;
        },
        uploadStagedFile() {
            this.uploadFile(this.stagedFile)
                .then(() => {
                    this.getFiles();
                    this.$router.push('/library');
                });
        }
    }
};
</script>

<style>
.FileForm {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
}
.FileForm-inputContainer {
    flex: 1;
    border: 0.1rem dashed black;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
}
.FileForm-inputContainer.is-active,
.FileForm-inputContainer:hover {
    border-color: white;
}
.FileForm-input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.FileForm-label {
    position: absolute;
    pointer-events: none;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.FileForm-label.is-active {
    color: white;
}
</style>