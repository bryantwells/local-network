<script setup>
import AudioRecorder from '@/components/radio/AudioRecorder.vue';
</script>

<template>
	<div class="AudioForm">
		<section class="AudioForm-body">
			<section class="AudioForm-field">
				<label 
					class="AudioForm-label"
					for="title">
					Title
				</label>
				<input 
					class="AudioForm-input AudioForm-input--text"
					:class="{
						'is-filled': title !== ''
					}"
					v-model="title"
					type="text"
					name="title"
					placeholder="The Name Of Your Show"
				/>
			</section>
			<section class="AudioForm-field">
				<label 
					class="AudioForm-label"
					for="title">
					Input Device
				</label>
				<select 
					class="AudioForm-input AudioForm-input--select"
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
		<section 
			v-if="activeDevice"
			class="AudioForm-submit">
			<AudioRecorder
				:user-id="userId"
				:metadata="{
					title,
                	description,
				}"
				:activeDeviceId="activeDevice.deviceId"
			/>
		</section>
	</div>
</template>

<script>
export default {
    name: "AudioForm",
	components: {
		AudioRecorder,
	},
	props: {
        userId: String,
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
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then(() => {
				navigator.mediaDevices.enumerateDevices()
					.then((inputDevices) => {
						this.inputDevices = inputDevices.filter((d) => d.kind == 'audioinput');
						this.activeDevice = this.inputDevices[0];
					});
			});
	}
}
</script>

<style>
.AudioForm {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.AudioForm-body {
	flex: 1;
	margin-bottom: 1rem;
}
.AudioForm-field {
	margin-bottom: 0.5rem;
}
.AudioForm-label {
    margin-bottom: 0.5rem;
    display: block;
}
.AudioForm-input {
    display: block;
    width: 100%;
    padding: 0.5rem;
	border-radius: 0.5rem;
	background: transparent;
	border: none;
	color: black;
	text-overflow: ellipsis;
	border: 0.1rem solid black;
}
.AudioForm-input::placeholder {
	color: black;
	opacity: 0.25;
}
.AudioForm-input--select {
	cursor: pointer;
	background: transparent;
	background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='10' width='10' xmlns='http://www.w3.org/2000/svg'><polygon points='0,1 5,9 10,1'/></svg>");
	background-size: 0.75rem;
	background-repeat: no-repeat;
	background-position-x: calc(100% - 0.5rem);
  	background-position-y: 0.75rem;
	padding-right: 2rem;
}
</style>