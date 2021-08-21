var mongoose = require('mongoose');  

var Task = mongoose.Schema({ 
    title: String,
    description: String,
    status: Boolean
});

return mongoose.model('tasks',Task); 