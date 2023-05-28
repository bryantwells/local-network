import { Readable } from "stream";
import Speaker from "speaker";

export default class SpeakerStream {
	constructor() {
		this.speaker = new Speaker({
			channels: 2,          // 2 channels
			bitDepth: 16,         // 16-bit samples
			signed: true,
			sampleRate: 48000,     // 44,100 Hz sample rate
			device: 'hw:0,0',
		});
		this.bufferLength = 144000;
		this.sampleRate = 48000;
		this.bufferQueue = [];

		// create stream
		this.stream = new Readable();
		this.stream._read = () => {};
		this.stream.pipe(this.speaker);

		// Put interval
        this.bufferIntervalId = null;
        this.bufferInterval = this.bufferLength / this.sampleRate * 1000;
		setInterval(() => {
			console.log('bufferQueue.length:', this.bufferQueue.length);
			console.log('bufferIntervalId:', !this.bufferIntervalId)
			if (this.bufferQueue.length > 1 && !this.bufferIntervalId) {
				this.activateStream();
			} else if (!this.bufferQueue.length && this.bufferIntervalId) {
				this.deactivateStream();
			}
		}, this.bufferInterval);
	}

	appendBuffer(buffer) {
		let stereoBuffer = [];
		[...buffer].forEach(val => {
			stereoBuffer.push(val, val);
		});
		stereoBuffer = Buffer.from(stereoBuffer);
		this.bufferQueue.push(stereoBuffer);
		console.log('append to speaker stream buffer');
	}

	activateStream() {
		console.log('activate speaker stream');
		this.bufferIntervalId = setInterval(() => {
			this.stream.push(this.bufferQueue[0]);
			this.bufferQueue.shift();
			console.log('speaker', this.bufferQueue[0]);
		}, this.bufferInterval);
	}

	deactivateStream() {
		if (this.bufferIntervalId) {
			console.log('deactivate speaker stream');
			clearInterval(this.bufferIntervalId);
		}
	}
}