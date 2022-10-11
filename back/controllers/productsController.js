const producto = require("../models/products")

//ver la lista de productos
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        message: "En esta ruta se veran los productos"
    })
}

//Crear nuevo producto /api/productos

exports.newProduct = async(req, res, next) => {
    const product = await producto.create(req.body);
    res.status(201).json({

    })
}