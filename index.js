const net = require('net');

let buffer = '';

// const server = net.createServer((c) => { // 'connection' listener
// console.log('server connected');
// c.on('end', () => {
//     console.log('server disconnected');
// });
// c.on('error', (error) => {
//     console.log('server error: ', error);
// });
// c.on('data', (data) => {
//     buffer += data.toString();
//     const itsEnd = buffer.slice(-5);
//     if (itsEnd === '[end]') {
//     const newStr = buffer.slice(7, -5);
//     console.log(newStr);
//     buffer = '';
//     }
// });
// });
server.listen(8124, () => { // 'listening' listener
console.log('server bound');
});

