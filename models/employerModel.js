const db = require('../config/db');

const createEmployer = (name, email, password, callback) => {
    //inserting records of employers
    const query = 'INSERT INTO employers (name, email, password) VALUES (?, ?, ?)';
    console.log(name, email, password)
    db.query(query, [name, email, password], callback);
};

const getEmployerByEmail = (email, callback) => {
    //query to get emplyer details by email id
    const query = 'SELECT * FROM employers WHERE email = ?';
    db.query(query, [email], callback);
};

const getAllEmployers = (callback) => {
    //get all employers
    const query = 'SELECT * FROM employers';
    db.query(query, callback);
};

const updateEmployer = (id, name, email, password, callback) => {
    //updating records by id
    const query = 'UPDATE employers SET name = ?, email = ?, password = ? WHERE id = ?';
    db.query(query, [name, email, password, id], callback);
};

const deleteEmployer = (id, callback) => {
    //delete records by id
    const query = 'DELETE FROM employers WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = {
    createEmployer,
    getEmployerByEmail,
    getAllEmployers,
    updateEmployer,
    deleteEmployer
};
