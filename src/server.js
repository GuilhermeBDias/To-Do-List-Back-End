import express from 'express';
import routes from './routes/taskRoutes.js';



const app = express();

routes(app)

app.listen(3333, () =>{
    console.log('Server is running on port 3333')
})