const express = require('express')
const router = express.Router()
var mongoose = require('mongoose')
var Comment = mongoose.model('comments')


router.get('/', async(req,res)=>{

    const comments = await Comment.find()
    res.render('form.twig', { title: 'My form', comments : comments });
});

router.post('/create',async(req,res)=>{
    await Comment.create({title:req.body.comment})
    res.redirect('/form')
    res.end()
    })

router.post('/update/:id',async(req,res)=>{
    const id = req.params.id;
    const updatedComment= req.body.updatedComment;
    await Comment.findByIdAndUpdate(id,{title:updatedComment})
    res.redirect('/form')
    res.end()

})

router.post('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    await Comment.deleteOne({_id:id})
    res.redirect('/form')
    res.end()

})


module.exports = router