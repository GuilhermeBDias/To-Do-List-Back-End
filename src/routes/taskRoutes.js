import express from 'express';
import { fetchAllTasks, addTask } from '../controllers/taskcontroller.js';

const routes = (app) =>{
    app.use(express.json());
    app.get('/tasks', fetchAllTasks);
    app.post('/tasks', addTask);
}

export default routes;