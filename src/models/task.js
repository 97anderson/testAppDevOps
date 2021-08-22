module.exports = function () {
    var db = require('../db')();
    var mongoose = require('mongoose');
    var Schema = require('mongoose').Schema;

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return mongoose.model('tasks', Task);
}
