const { products } = require('../Modules/database')

const homePage = (req, res, next) => {
    
    res
    .status(200)
    .render('index', {

        title: 'SudaPhone ~ Search your smart phone now'
    })
    
    next()
}

module.exports = { homePage }