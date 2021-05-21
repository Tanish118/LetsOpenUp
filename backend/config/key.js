if(process.env.NODE__ENV === 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}