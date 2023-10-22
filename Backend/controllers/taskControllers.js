const taskModel = require("../models/taskModel")

module.exports.getTask = async (req, res) => {
    const task = await taskModel.find()
    res.send(task)
}

module.exports.saveTask = async (req, res) => {

    const { text } = req.body

    taskModel
        .create({ text })
        .then((data) => {
            console.log("Adicionado com sucesso");
            console.log(data);
            res.send(data);
        })

}

module.exports.updateTask = async (req, res) => {

    const { _id, text } = req.body

    taskModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Atualizado com sucesso"))
        .catch((err) => console.log(err))
}

module.exports.deleteTask = async (req, res) => {

    const { _id } = req.body

    taskModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Excluído com sucesso"))
        .catch((err) => console.log(err))
}
