const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    prd_name:String,
    prd_desc:String,
    prd_price:Number,
    updated_at:{type: Date,default:Date.now}
})

module.exports = mongoose.model('Product',ProductSchema)