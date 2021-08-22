const express = require('express');
const router  = express.Router();

const model = require('../models/task')();

router.get('/', (req,res) => {
    model.find({}, (err, tasks) => {
        if(err) throw err;
        res.render('index.ejs',{

            tasks: tasks
        });
    });
});

router.post('/add', (req, res)=>{
    let body = req.body
    console.log('body', body)
    body.status = false;

    model.create(body, (err, task)=>{
        if(err) throw err;
        res.redirect('/')
    })
})

module.exports = router; 
