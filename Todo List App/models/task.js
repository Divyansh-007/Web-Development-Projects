// library required
const mongoose = require('mongoose');

// task document scehma
const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

// task model 
const Task = mongoose.model('Task',taskSchema);

// exporting the model to be used
module.exports = Task;