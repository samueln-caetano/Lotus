const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const routesTasks = require("./routes/taskRoute")
const routesUser = require("./routes/userRoute")

const databaseSchema = require('./models/database')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/database")
    .then(() => console.log("Conexão com o MongoDB estabelecida"))
    .catch(err => console.log("Erro na conexão: " + err));
;

app.use(routesTasks)
app.use(routesUser)

app.listen(3001, () => {
    console.log("Server is running")
})