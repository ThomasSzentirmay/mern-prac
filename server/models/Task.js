const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Task = model('Task', taskSchema);

module.exports = Task;