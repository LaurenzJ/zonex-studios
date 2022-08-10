const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    skus: {},
    details: [],
    description: {},
    reviews: mongoose.Schema.Types.ObjectId,
    image: String
})

module.exports = mongoose.model('Product', productSchema)