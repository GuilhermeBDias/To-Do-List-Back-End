import pool from '../config/db.js';


// Function to fetch all tasks
export const getAllTasks = async () => {
    const { rows } = await pool.query('SELECT * FROM tasks');
    
    return rows;
};

// Function to add a task
export const createTask = async (title, description) => {     
    const query = 'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) returning *';

    const createdTask = await pool.query(query, [title, description, 'pendente']);

    return createdTask.rows[0];
};

// Function to remove a task
export const deleteTask = async (id) => {
    const removedTask = await pool.query('DELETE FROM tasks WHERE id = $1 returning *', [id]);

    return removedTask.rows[0];
};


// Function to edit a task
export const updateTask = async (id, task) => {
    const query = 'UPDATE tasks SET title = $1, status = $2 WHERE id = $3 returning *'

    const { title, status } = task;

    const updatedTask = await pool.query(query, [title, status, id]);
    
    return updatedTask.rows[0];
};