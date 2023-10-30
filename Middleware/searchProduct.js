const { products } = require('../Modules/database')

const searchProduct = (req, res, next) => {

    const { product } = req.query
    const getProducts = products.filter(el => el.name.includes(product))

    if (getProducts.length > 0) {

        res
        .status(200)
        .render('searchProduct', {
            
            data: getProducts,
            limit: getProducts.length,
            title: 'SudaPhone ~ Results'
        })

    } else {

        res
        .status(200)
        .render('notFound', {

            title: 'Not Found'
        })
    }

    next()
}

module.exports = { searchProduct }