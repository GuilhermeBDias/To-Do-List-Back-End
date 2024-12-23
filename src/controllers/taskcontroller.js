import { getAllTasks } from '../models/taskModel.js';

export const fetchAllTasks = async (req, res) =>{
    const rows = await getAllTasks();
    
    return res.status(200).json(rows);
};