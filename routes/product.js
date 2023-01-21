const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/Product')


router.get('/',(req,res,next)=>{
    Product.find((err,prd)=>{
        if(err) return next(err)
        res.json(prd)
    })
})
router.get('/:id',(req,res,next)=>{
    Product.findById(req.params.id,(err,prd)=>{
        if(err) return next(err)
        res.json(prd)
    })
})
router.post('/',(req,res,next)=>{
    Product.create(req.body,(err,post)=>{
        if(err) return next(err)
        res.json(post)
    })
})
router.put('/:id',(req,res,next)=>{
    Product.findByIdAndUpdate(req.params.id,req.body,(err,post)=>{
        if(err) return next(err)
        res.json(post)
    })
})
router.delete('/:id',(req,res,next)=>{
    Product.findByIdAndDelete(req.params.id,(err,post)=>{
        if(err) return next(err)
        res.json(post)
    })
})



module.exports = router