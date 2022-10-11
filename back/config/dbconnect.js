const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de Datos mongoDB conectada a servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log("Base de Datos no conectada")
    })

}

module.exports = connectDatabase;