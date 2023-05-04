// Variables
let dataBuffer = [];
const maxSamples = 1152;

// Init
const init = () => {
    dataBuffer = [];
};

// Append to Buffer
const appendToBuffer = data => {
    dataBuffer.push(data);
};

// Float to 16bit PCM
const floatTo16BitPCM = (input, output) => {
    for (let i = 0; i < input.length; i++) {
        let s = Math.max(-1, Math.min(1, input[i]));
        output[i] = (s < 0 ? s * 0x8000 : s * 0x7FFF);
    }
};

// Convert Buffer
const convertBuffer = arrayBuffer => {
    let data = new Float32Array(arrayBuffer);
    let out = new Int16Array(arrayBuffer.length);
    floatTo16BitPCM(data, out)
    return out;
};

// Encodes the received arrayBuffer 
const encode = arrayBuffer => {
    let samplesMono = convertBuffer(arrayBuffer);
    let remaining = samplesMono.length;
    for (let i = 0; remaining >= 0; i += maxSamples) {
        let left = samplesMono.subarray(i, i + maxSamples);
        appendToBuffer(left);
        remaining -= maxSamples;
    }
};

// Posts the Buffer to the main page
const finish = () => {
    self.postMessage({
        cmd: 'end',
        buf: dataBuffer
    });
    dataBuffer = [];
}

// Process Messages
self.onmessage = function (e) {
    switch (e.data.cmd) {
        case 'init':
            init();
            break;
        case 'encode':
            encode(e.data.buf);
            break;
        case 'finish':
            finish();
            break;
    }
};
