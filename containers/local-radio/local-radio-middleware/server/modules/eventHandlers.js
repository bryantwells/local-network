import { PassThrough } from "stream";
import { readFileSync } from "fs";
import Ffmpeg from "fluent-ffmpeg";

export default (io, icecastService) => {

	// Get Sources
	function getSources() {
		const socket = this;
        socket.emit('sourceList', icecastService.getSourceList());
	}
  
	// Create Source
	async function createSource(userId, mountId, bufferLength, metadata) {
        await icecastService.createSource(userId, mountId, bufferLength, metadata);
        io.emit('sourceList', icecastService.getSourceList());
		console.log('createSource', userId, mountId);
	}

	// Put Source Data
	async function putSourceData(userId, mountId, buffer, bufferLength, metadata) {

		// create strea
		const bufferStream = new PassThrough();
        bufferStream.end(buffer);

		// ffmpeg encoding
        new Ffmpeg()
            .input(bufferStream)
            .inputFormat('s16le')
            .audioCodec('libvorbis')
			.audioFrequency(48000)
            .format('ogg')
            .on('error', (err) => {

				// on error
                console.error('ffmpeg-error', err);
                reject(err);
            })
            .on('end', async () => {

				// on encoding completion990

                const oggBuffer = readFileSync('./buffer.ogg');
                await icecastService.putSourceData(userId, mountId, oggBuffer, bufferLength, metadata);
            })
            .save('./buffer.ogg');
	}

	// Kill Source
	async function killSource(userId, mountId, bufferLength) {
        await icecastService.killSource(userId, mountId, bufferLength);
        io.emit('sourceList', icecastService.getSourceList());
		console.log('killSource', userId, mountId);
	}

	return {
		getSources,
		createSource,
		putSourceData,
		killSource,
	}
}