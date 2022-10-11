const express = require("express")
const router = express.Router();

const { getProducts, newProduct } = require("../controllers/productsController") // traemos respuesta desde json del controlador 

router.route('/productos').get(getProducts) // Establesemos desde que ruta qumoduleeremos ver get products
router.route('/producto/nuevo').post(newProduct); // ruta  nuevo producto

module.exports = router;