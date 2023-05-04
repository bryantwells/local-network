<script setup>
import AudioRecorder from '@/components/AudioRecorder.vue';
</script>

<template>
	<div class="UploadForm">
		<section class="UploadForm-body">
			<header class="UploadForm-header">
				<p>
					The radio is currently available for broadcasting. Use the form below to start one. Broadcasts are made immediately available online and at 89.7fm in Brownsville.
				</p>
			</header>
			<section class="UploadForm-field">
				<label 
					class="UploadForm-label"
					for="title">
					Title
				</label>
				<input 
					class="UploadForm-input UploadForm-input--text"
					:class="{
						'is-filled': title !== ''
					}"
					v-model="title"
					type="text"
					name="title"
					placeholder="The Name Of Your Show"
				/>
			</section>
			<section class="UploadForm-field">
				<label 
					class="UploadForm-label"
					for="title">
					Input Device
				</label>
				<select 
					class="UploadForm-input UploadForm-input--select"
					name="inputdevice"
					v-model="activeDevice">
					<option 
						v-for="inputDevice in inputDevices"
						:value="inputDevice">
						{{ inputDevice.label }}
					</option>
				</select>
			</section>
		</section>
		<section class="UploadForm-submit">
			<AudioRecorder
				:user-id="userId"
				:metadata="{
					title,
                	description,
				}"
			/>
		</section>
	</div>
</template>

<script>
export default {
    name: "UploadForm",
	components: {
		AudioRecorder,
	},
	props: {
        userId: {
            default: '',
            type: String,
        }
    },
	data() {
        return {
			title: '',
			description: '',
			activeDevice: null,
			inputDevices: [],
        };
    },
	mounted() {
		navigator.mediaDevices.enumerateDevices()
			.then((inputDevices) => {
				this.inputDevices = inputDevices.filter((d) => d.kind == 'audioinput');
				this.activeDevice = this.inputDevices[0];
			});
	},
}
</script>

<style>
.UploadForm-body {
	margin-bottom: 1.5rem;
}
.UploadForm-header {
	margin-bottom: 1rem;
}
.UploadForm-field {
	margin-bottom: 1rem;
}
.UploadForm-label {
    margin-bottom: 0.5rem;
    display: block;
}
.UploadForm-input {
    display: block;
    width: 100%;
    padding: 0.5rem;
	border: 0.075rem solid green;
	border-radius: 0.25rem;
	color: green;
	opacity: 0.5;
}
.UploadForm-input::placeholder {
	opacity: 1;
	color: green;
}
.UploadForm-input.is-filled {
	opacity: 1;
}
.UploadForm-input--select {
	opacity: 1;
	background: transparent;
	background-image: url("data:image/svg+xml;utf8,<svg fill='green' height='10' width='10' xmlns='http://www.w3.org/2000/svg'><polygon points='0,1 5,9 10,1'/></svg>");
	background-size: 0.75rem;
	background-repeat: no-repeat;
	background-position-x: calc(100% - 0.5rem);
  	background-position-y: 0.75rem;
}
</style>