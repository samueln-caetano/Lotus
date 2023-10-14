const mongoose = require("mongoose")

const databaseSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const databaseModel = mongoose.model("users", databaseSchema)

module.exports = databaseModel;