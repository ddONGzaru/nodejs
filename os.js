/**
 * Created by taewo_000 on 2014-05-01.
 */

var os = require('os');

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.cpus().length);
console.log('\r\n');
console.log(os.getNetworkInterfaces());
