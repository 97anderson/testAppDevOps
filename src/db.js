const mongoose = require('mongoose')

let db;

module.exports = function Connection(){
    if(!db){
        db = mongoose.connect('mongodb://mongo/mydatabase',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
    }
    return db;
}
