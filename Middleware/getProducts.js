const { products } = require('../Modules/database')

const getProducts = (req, res, next) => {

    res
    .status(200)
    .render('products', {

        product: products,
        limit: products.length,
        title: 'SudaPhone ~ Products'
    })

    next()
}

module.exports = { getProducts }