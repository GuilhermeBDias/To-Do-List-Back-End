import { getAllTasks, createTask } from '../models/taskModel.js';

export const fetchAllTasks = async (req, res) =>{
    const rows = await getAllTasks();
    
    return res.status(200).json(rows);
};

export const addTask = async (req, res) =>{
    const {title, description} = req.body;

    const newTask = await createTask(title, description);

    return res.status(201).json(newTask);

};