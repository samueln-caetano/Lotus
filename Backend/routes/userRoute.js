const { Router } = require("express")

const routerUser = Router()

routerUser.post('/login', (req, res) => {
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

routerUser.post('/register', (req, res) => {
    databaseSchema.create(req.body)
       .then(users => res.json(users))
       .catch(err => res.json(err))
})

module.exports = routerUser;