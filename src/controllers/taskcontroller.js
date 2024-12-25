import { getAllTasks, createTask, deleteTask, updateTask } from '../models/taskModel.js';

// Function to fetch all tasks
export const fetchAllTasks = async (req, res) =>{
    const rows = await getAllTasks();
    
    return res.status(200).json(rows);
};

// Function to add a task
export const addTask = async (req, res) =>{
    const {title, description} = req.body;

    const newTask = await createTask(title, description);

    return res.status(201).json(newTask);
};

// Function to remove a task
export const removeTask = async (req, res) =>{
    const { id } = req.params;

    await deleteTask(id);

    return res.status(204).json()
};

// Function to edit a task
export const editTask = async (req, res) =>{
    const { id } = req.params;

    await updateTask(id, req.body);
    
    return res.status(200).json();
};