import express from 'express';
import { fetchAllTasks } from '../controllers/taskcontroller.js';

const routes = (app) =>{
    app.use(express.json());
    app.get('/tasks', fetchAllTasks);
}

export default routes;