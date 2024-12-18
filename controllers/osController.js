const osmodule = require('os')


    function getById(id) {
     
      const cpus = osmodule.cpus();
      const cpu = cpus[id];
      return cpu;
    }
    
    function getDetails(){
        return {
        hostname: osmodule.hostname(),
        type: osmodule.type(),
        platform:osmodule.platform()
        }
    }

module.exports = {
    getById,
    getDetails
};