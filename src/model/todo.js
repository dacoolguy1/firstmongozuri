const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    description: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 50
    },
}, {timestamps: true});


const taskModel = model("tasks", taskSchema);

module.exports = taskModel;