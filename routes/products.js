const express = require('express')
const router = express.Router()


const {getProducts,getProductById,getProductByIdandQt,getProductByQt}  = require('../controllers/productController')

router.get('/',(req,res)=>{
   res.json(getProducts()) 
});

router.get('/:id',(req,res)=>{
   const id = req.params.id; 
   res.json(getProductById(id)) 
});


router.get('/instock/:qt',(req,res)=>{
   const qt= req.params.qt; 
   res.json(getProductByQt(qt)) 
});



module.exports = router