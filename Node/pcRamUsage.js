//https://nodejs.org/api/os.html
const { Console } = require('console');
const os = require('os');

// setInterval(callback[, delay[, ...args]])
// setInterval( function() { funca(10,3); }, 500 );
setInterval(()=>{
// console.log(os)
const {arch, freemem,platform, totalmem} = os;
const tRam = totalmem()/1024/1024;
const fRam = freemem()/1024/1024;
const usage = (fRam/tRam)*100;

const status = {
    OS: platform(),
    Arch: arch(),
	TotalRAM: parseInt(tRam),
	FreeRAM: parseInt(fRam),
	Usage: `${usage.toFixed(2)}%`
}
console.clear();
// console.log(status);
console.table(status);
exports.status = status;

},1000);

