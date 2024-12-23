import pool from '../config/db.js';

export const getAllTasks = async () => {
    const { rows } = await pool.query('SELECT * FROM tasks');
    return rows;
};

export const createTask = async (title, description) => {     
    const query = 'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) returning *';

    const createdTask = await pool.query(query, [title, description, 'pendente']);

    return createdTask.rows[0];
};