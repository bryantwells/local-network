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
	}

	appendBuffer(buffer) {
		this.bufferQueue.push(buffer);
		console.log('speaker', buffer);
		if (this.bufferQueue.length > 2 && !this.bufferIntervalId) {
			this.bufferIntervalId = setInterval(() => {
				if (this.bufferQueue.length) {
					this.stream.push(this.bufferQueue[0]);
					this.bufferQueue.shift();
				} else {
					clearInterval(this.bufferIntervalId);
					this.bufferIntervalId = null;
				}
			},  this.bufferLength / this.sampleRate * 1000);
		}
	}
}