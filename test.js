// const name = 'muhammad';

// console.log(name);
// const fs = require('fs');


// fs.writeFile('./blog1.txt', 'New file', () => {
//     console.log('it happened')
// } )
// fs.readFile('./blog1.txt', (err, data) => {
//     console.log(data.toString());
// })




const http = require('http');

const server = http.createServer((request , response) => {
    console.log('Request made');
})

server.listen(8000, 'localhost', () => {
    console.log('listening at port 8000')
})



// const greet = (name) => {
//     console.log(`hello, ${name}`);
// }
// greet('musa')
// greet('john')

// global.setTimeout(() => {
//     console.log('Time out');
// }, 3000);

