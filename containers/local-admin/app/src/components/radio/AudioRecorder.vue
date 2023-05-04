<script setup>
import { mapState, mapActions } from 'pinia'
import { useRadioStore } from '@/stores/radio';
</script>

<template>
    <div class="AudioRecorder">
        <div 
			v-if="!isRecording"
			class="AudioRecorder-button AudioRecorder-button--start"
			@click="startRecording()">
			Start Streaming
		</div>
		<div 
			v-if="isRecording"
			class="AudioRecorder-button AudioRecorder-button--stop"
			@click="stopRecording()">
			Stop Streaming
		</div>
    </div>
</template>

<script>
export default {
    name: "AudioRecorder",
    props: {
        userId: {
            default: '',
            type: String,
        },
        metadata: {
            default: {
                title: '',
                description: '',
            },
            type: Object,
        },
    },
	data() {
        return {
            mountId: 'local-radio',
            isDisabled: true,
            isRecording: false,
            context: null,
            sourceNode: null,
			encoderWorker: null,
            encoderProcessorNode: null,
        };
    },
    computed: {
        /* Store Actions */
        ...mapState(useRadioStore, ['sources']),
    },
	mounted() {
		this.initContext();
		this.initProcessor();
        this.initWorker();
	},
	methods: {

        /* Store Actions */
        ...mapActions(useRadioStore, ['createSource', 'putSourceData', 'killSource']),

		/**
		 * Init Context
		 */
		initContext() {
			const AudioContext = window.AudioContext || window.webkitAudioContext;
			this.context = new AudioContext();
		},

		/**
         * Init Processor
         * Add processor module to worklet
         */
		 initProcessor() {
            const encoderProcessorURL = new URL('/lib/encoder-processor.js', import.meta.url);
            this.context.audioWorklet.addModule(encoderProcessorURL)
                .then(() => {
                    this.isDisabled = false;
                })
                .catch((error) => {
                    alert('Something went wrong');
                    console.log(error);
                });
        },

		/**
         * Init Worker
         * Init the service worker (create a new LameJS MP3 Encoder instance)
         * Add an event listener that monitors for encoded MP3 buffer
         */
		 initWorker() {
            const encoderWorkerURL = new URL('/lib/encoder-worker.js', import.meta.url);
            this.encoderWorker = new Worker(encoderWorkerURL);
            this.encoderWorker.postMessage({
                'cmd': 'init'
            });
            this.encoderWorker.addEventListener('message', (e) => {
                if (e.data.cmd == 'end') {
                    const MP3Blob = new Blob(e.data.buf, { type: 'audio/mp3' });
                    this.putSourceData(this.userId, this.mountId, MP3Blob, this.metadata);
                }
            });
        },

		/**
		 * Start Recording
         * encoding process adapted from:
         * https://github.com/jzuccaro/audioworklet-mp3-recorder
		 */
		startRecording() {
			navigator.mediaDevices.getUserMedia({ audio: true })
				.then((stream) => {
					// Update var
					this.isRecording = true;
                    this.createSource(this.userId, this.mountId, this.metadata);

                    let track = stream.getAudioTracks()[0];

					// Start audio context
					this.context.resume();

					// Setup source node (microphone)
                    this.sourceNode = this.context.createMediaStreamSource(stream);

					// Create processor node
                    if (!this.encoderProcessorNode) {
                        this.encoderProcessorNode = new AudioWorkletNode(
                            this.context,
                            'encoder-processor'
                        );
                    }
                    
                    // Connect worklet node to processor, destination
                    this.sourceNode.connect(this.encoderProcessorNode);
                    this.encoderProcessorNode.connect(this.context.destination);

                    // AudioWorkletProcessor Event
                    // Pass buffer to the encoder whenever they are made avaialbe
                    this.encoderProcessorNode.port.onmessage = (e) => {
                        this.encoderWorker.postMessage({
                            'cmd': 'encode',
                            'buf': e.data
                        });
                    };

                    // Send command to service worker every X seconds
                    // It will respond with an 'end' message and MP3 buffer
                    const encoderInterval = setInterval(() => {
                        if (this.isRecording) {
                            this.encoderWorker.postMessage({
                                'cmd': 'finish',
                            });
                        } else {
                            clearInterval(encoderInterval);
                        }
                    }, 5000);
				})
				.catch((error) => {
                    alert('Something went wrong');
                    console.log(error);
                });
		},

		/**
		 * Stop Recording
		 */
		stopRecording() {
			
			// Disconnect
            this.sourceNode.disconnect();
            this.context.suspend();

            // Kill source
            if (this.isRecording) {
                this.killSource(this.userId, this.mountId);
            }
            
            // Update var
            this.isRecording = false;
		},
	}
};
</script>

<style>
.AudioRecorder {
    height: 100%;
}
.AudioRecorder-button {
	cursor: pointer;
	display: flex;
	background: black;
	color: white;
	border-radius: 0.5rem;
	padding: 0.5rem;
    align-items: center;
    justify-content: center;
}
.AudioRecorder-button:hover {
	color: red;
}
.AudioRecorder-button::before {
    content: '';
    display: inline-block;
    margin-right: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: white;
}
.AudioRecorder-button:hover::before {
    background-color: red;
}
.AudioRecorder-button--start::before {
    border-radius: 50%;
}
</style>