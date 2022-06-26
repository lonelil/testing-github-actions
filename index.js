const fs = require('fs');
fs.writeFileSync('test.txt', `${new Date().toUTCString()}`);
console.log(process.env)
