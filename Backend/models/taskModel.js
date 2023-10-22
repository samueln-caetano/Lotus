const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

const taskModel = mongoose.model("tasks", taskSchema)

module.exports = taskModel