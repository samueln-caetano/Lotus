const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const databaseSchema = require('./models/database')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/database")
    .then(() => console.log("Conexão com o MongoDB estabelecida"))
    .catch(err => console.log("Erro na conexão: " + err));
;

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    databaseSchema.findOne({email: email})
    .then( user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})


app.post('/register', (req, res) => {
    databaseSchema.create(req.body)
       .then(users => res.json(users))
       .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running")
})