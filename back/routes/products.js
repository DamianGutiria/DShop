const express = require("express")
const router = express.Router();

const { getProducts } = require("../controllers/productsController") // traemos respuesta desde json del controlador 

router.route('/productos').get(getProducts) // Establesemos desde que ruta qumoduleeremos ver get products

module.exports = router;