class EncoderProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
    }
    process(inputs, outputs, parameters) {
        this.port.postMessage(inputs[0][0]);
        return true;
    }
}
registerProcessor('encoder-processor', EncoderProcessor);
