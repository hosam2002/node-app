/** GET REQUEST
 * 
 * /home
 * /products
 * 
 */

// process.env.PORT

// Setting the Server
const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

// Local Moduels
const { products } = require('./Modules/database')

// Setting the view engine: EJS
app.set('view engine', 'ejs')

// Accessing the form method: Get
app.use(express.urlencoded({ extended: false }))

// Middlewars
const { homePage } = require('./Middleware/homePage');
const { getProducts } = require('./Middleware/getProducts')
const { searchProduct } = require('./Middleware/searchProduct');

// Setting the GET Request
app.get('/', homePage)
app.get('/products', getProducts)
app.get('/products/query', searchProduct)

// Listen on port 5500
app.listen(port, () => console.log(`Server listening on port ${port}...`))