import mongoose from "mongoose";
import ToDo from "../models/Todo.js";

// get all todo items from database
export const getTodos = async (req, res) => {
    try {
        const toDoList = await ToDo.find();        
        res.status(200).json(toDoList);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// add new todo item
export const createTodos = async (req, res) => {
    const todo = req.body;
    const newToDoObj = new ToDo(todo);
    try {
        await newToDoObj.save();
        res.status(201).json(newToDoObj);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// update todo item
export const updateTodo = async (req, res) => {
    const { id: _id } = req.params;
    const todo = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`Can not find any todo item associated with id : ${id}`)
    } else {
        const updatedToDo = await ToDo.findByIdAndUpdate(_id, {...todo, _id}, {new: true});
        // return res.status(201).send(JSON.stringify(updatedPost))
        res.status(200).json(updatedToDo)
    }
}

//delete todo item
export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Can not find any todo item associated with id : ${id}`)
    } else {
        await ToDo.findByIdAndRemove(id);
        res.json({message: 'Todo item deleted successfully'});
    }
}