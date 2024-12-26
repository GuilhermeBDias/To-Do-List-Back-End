import express from 'express';
import cors from 'cors';
import { validateFieldStatus, validateFieldTitle } from '../middlewares/tasksMiddleware.js';
import { fetchAllTasks, addTask, removeTask, editTask } from '../controllers/taskcontroller.js';

// Routes for tasks
const routes = (app) =>{
    app.use(express.json());
    app.use(cors());
    app.get('/tasks', fetchAllTasks);
    app.post('/tasks',validateFieldTitle, addTask);
    app.delete('/tasks/:id', removeTask);
    app.put('/tasks/:id',validateFieldTitle, validateFieldStatus, editTask);
};

export default routes;