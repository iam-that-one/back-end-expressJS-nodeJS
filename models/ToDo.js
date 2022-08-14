import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    _id : {
        type: String,
        require: true
    },
    toDoTitle: {
        type : String,
        required: true,
    },
    toDoDes: {
        type : String,
        required: true,
    }
    
    
});

const ToDoModel = mongoose.model("todo", ToDoSchema)

export default ToDoModel;