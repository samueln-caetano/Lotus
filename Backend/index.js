const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const databaseSchema = require('./models/database')
const TodoModel = require('./models/Todo')

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

app.get("/get-todo", (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.put("/delete/:id", (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});


app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("Server is running")
})