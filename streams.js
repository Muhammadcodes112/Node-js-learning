const fs = require('fs');

const writestream = fs.createWriteStream('./blog4.txt', '')
const readStream = fs.createReadStream('./blog3.txt');

readStream.on('data', (chunk) => {
    writestream.write('\n NEWEST CHUNK\n')
    writestream.write(chunk);
    console.log('Created successfully')

    // console.log('-----------NEW CHUNK----------')
    // console.log(chunk.toString());
})