import express from 'express';
//import dotenv from 'dotenv';
import routes from './routes/taskRoutes.js';

//dotenv.config();

const app = express();

routes(app)

app.listen(3333, () =>{
    console.log('Server is running')
})