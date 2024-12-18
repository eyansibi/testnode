var express = require('express');
var router = express.Router();
const osmodule = require('os')

const {getById, getDetails} = require('../controllers/osController');

router.get('/',(req,res)=>{
    res.json(getDetails());
})

router.get('/cpus/:id',(req,res)=>{
    const id = req.params.id;
    res.json(getbyid(id)) 
});


router.get('/cpus',function(req,res,next){
    res.json(
       osmodule.cpus()
    )
})

   

module.exports = router;