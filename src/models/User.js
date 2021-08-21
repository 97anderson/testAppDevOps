const {Shema, model} = require('mongoose')

const UserShema = new Shema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps:true
})


module.exports = model('User', UserSchema)