const { connections } = require('mongoose')
const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send()
}

module.exports = {
    get,
    post,
}