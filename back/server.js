/* iniciar servidor */
const app = require('./app');
const connectDatabase = require("./config/dbconnect");
// setear archivo de configuración 
const dotenv = require("dotenv");
dotenv.config({ path: 'back/config/config.env' })

//configurar base de datos
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

// resolver error