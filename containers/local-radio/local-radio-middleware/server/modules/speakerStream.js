import Speaker from "speaker";

export default class SpeakerStream {
	constructor() {
		this.speaker = new Speaker({
			channels: 2,          // 2 channels
			bitDepth: 16,         // 16-bit samples
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
			if (this.bufferQueue > 0 && !this.bufferIntervalId) {
				this.activateStream();
			} else {
				this.deactivateStream();
			}
		}, this.bufferInterval);
	}

	appendBuffer(buffer) {
		this.bufferQueue.push(buffer);
	}

	activateStream() {
		setTimeout(() => {
			this.bufferIntervalId = setInterval(() => {
				this.stream.push(this.bufferQueue[0]);
				this.bufferQueue.shift();
			}, this.bufferInterval);
		}, this.bufferInterval * 1.5);
	}

	deactivateStream() {
		if (this.bufferIntervalId) {
			clearInterval(this.bufferIntervalId);
		}
	}
}