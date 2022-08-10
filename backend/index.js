const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const Product = require('./models/Product')

require('dotenv').config()

mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB')
})

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        'name': 'jimmy neutron'
    })
})

app.get('/api/products', async (req, res) => {
    const products = await Product.find()
    res.send(products)
})

app.get('/api/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.send(product)
})

app.post('/api/products', async (req, res) => {
    // check if body has all required fields
    if (!req.body.name || !req.body.skus || !req.body.details || !req.body.description || !req.body.image) {
        res.status(400).send('missing required fields')
        return
    }

    const product = new Product({
        _id: req.body.name.toLowerCase(),
        name: req.body.name,
        skus: req.body.skus,
        details: req.body.details,
        description: req.body.description,
        reviews: null,
        image: req.body.image
    })
    await product.save()
    res.send(product)
    
})

// send email
app.post('/sendmail', (req, res) => {
    
})

app.listen(3000)