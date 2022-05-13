import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
    taskName: String,
    taskDescription: String,
    attachment: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const ToDo = mongoose.model('ToDo', toDoSchema);

export default ToDo;
