const express = require("express")
const router = express.Router();

const { getProducts, newProduct, getProductById, updateProduct, deleteProduct } = require("../controllers/productsController") // traemos respuesta desde json del controlador 

router.route('/productos').get(getProducts); // Establesemos desde que ruta qumoduleeremos ver get products
router.route('/producto/nuevo').post(newProduct); // crear nuevo producto
router.route('/producto/:id').get(getProductById); // ruta  nuevo producto
router.route('/producto/:id').put(updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Creacion de la ruta de eliminacion por id

module.exports = router;