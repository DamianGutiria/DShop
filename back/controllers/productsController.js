const producto = require("../models/products")

//ver la lista de productos
exports.getProducts = async(req, res, next) => {
        const productos = await producto.find();
        res.status(200).json({
            sucess: true,
            count: productos.length,
            productos
        })
    }
    // consulta de solo un objeto 

exports.getProductById = async(req, res, next) => {

}


//Crear nuevo producto /api/productos

exports.newProduct = async(req, res, next) => {
    const product = await producto.create(req.body);
    res.status(201).json({
        sucess: true,
        pruduct
    })
}