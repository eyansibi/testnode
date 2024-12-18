const express = require('express')
const router = express.Router()
var mongoose = require('mongoose')
var Hotel = mongoose.model('hotels')


router.get('/', async(req,res)=>{

    const hotels = await Hotel.find()
    res.render('Hotel.twig', { title: 'My Hotel', hotels : hotels });
});

router.post('/create',async(req,res)=>{
    await Hotel.create({title:req.body.Hotel})
    res.redirect('/hotel')
    res.end()
    })

router.post('/update/:id',async(req,res)=>{
    const id = req.params.id;
    const updatedHotel= req.body.updatedHotel;
    await Hotel.findByIdAndUpdate(id,{name:updatedHotel},{fabricationDate:updatedHotel},{nbrRooms:updatedHotel})
    res.redirect('/hotel')
    res.end()

})

router.post('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    await Hotel.deleteOne({_id:id})
    res.redirect('/hotel')
    res.end()

})



module.exports = router