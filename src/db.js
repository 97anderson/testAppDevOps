const mongoose = require('mongoose')

let db;

module.exports = function Connection(){
    if(!db){
        db = mongoose.connect('mongodb://3.133.137.202:27017/mydatabase',{
            useNewUrlParser:true
        });
    }
    return db;
}
