const os = require('os');

//info about current user ;
const user = os.userInfo();


//methods returns the system uptime in seconds 

console.log(`the system uptime is ${os.uptime()} seconds`);

//other infos about os using the built-in module "os"

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);