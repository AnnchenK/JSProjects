import mysql2 from 'mysql2/promise'

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mydb',
    password: 'SQLpassword',
});

export const getAll = async (req, res) => {
    const [rows, fields] = await pool.query('select * from tasks');
    return rows;
};

export const addTodo = async (rec, res) => {
    await pool.query(`insert into tasks (name) values ("${rec.name}")`);
};

export const checkTodo = async (rec, res) => {
    await pool.query(`update tasks set is_done = "${Number(!!rec.completed)}" where id = "${rec.id}";`);
};