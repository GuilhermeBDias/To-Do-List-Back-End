import express from 'express';
import { validateBody } from '../middlewares/tasksMiddleware.js';
import { fetchAllTasks, addTask, removeTask } from '../controllers/taskcontroller.js';

const routes = (app) =>{
    app.use(express.json());
    app.get('/tasks', fetchAllTasks);
    app.post('/tasks',validateBody, addTask);
    app.delete('/tasks/:id', removeTask)
}

export default routes;