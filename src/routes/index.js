const express = require('express');
const router  = express.Router();

//const model = require('../models/task');

router.get('/', (req,res) => {
    //model.find({}, (err, tasks) => {
      //  if(err) throw err;
        res.render('index.ejs');
    //});
});

module.exports = router; 