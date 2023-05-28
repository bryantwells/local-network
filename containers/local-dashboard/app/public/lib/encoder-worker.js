// Variables
let dataBuffer = [];
let targetLength = 0;

// Init
const init = (bufferLength) => {
    dataBuffer = [];
    targetLength = bufferLength;
};

// Append
const append = (data) => {

    // append data to buffer
    dataBuffer = [...dataBuffer, ...data];
    
    // check buffer length
    if (dataBuffer.length > targetLength) {

        // create float array from first chunk in buffer
        const floatPayload = new Float32Array(dataBuffer.splice(0, targetLength));

        // convert float array to int
        const intPayload = new Int16Array(floatPayload.map((n) => {
            const s = Math.max(-1, Math.min(1, n));
            return (s < 0 ? s * 0x8000 : s * 0x7FFF);
        }));

        // send message with payload
        self.postMessage({
            cmd: 'end',
            payload: intPayload
        });
    }
}


// Process Messages
self.onmessage = function (e) {
    switch (e.data.cmd) {
        case 'init':
            init(e.data.bufferLength);
            break;
        case 'append':
            append(e.data.buffer);
            break;
        case 'finish':
            finish();
            break;
    }
};
