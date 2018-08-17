
let root_schema_build;
try{
    root_schema_build = require('../../build/root_schema').default;
}catch(e){
    
}

module.exports = [
    root_schema_build
]
