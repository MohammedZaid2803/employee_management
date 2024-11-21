const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const employerModel = require('../models/employerModel');

const registerEmployer = (req, res) => {
    const { name, email, password } = req.body;
// console.log(req.body)

    // checking if employee exist
    employerModel.getEmployerByEmail(email, (err, result) => {
        if (result.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password before saving
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) throw err;

            employerModel.createEmployer(name, email, hashedPassword, (err, result) => {
                if (err) throw err;
                res.status(201).json({ message: 'Employer registered successfully' });
            });
        });
    });
};

const loginEmployer = (req, res) => {
    const { email, password } = req.body;
 // checking if employee exist
    employerModel.getEmployerByEmail(email, (err, result) => {
        if (result.length === 0) {
            return res.status(400).json({ message: 'Employer not found' });
        }
// console.log(result)
        // Compare passwords
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
        // Generate JWT token
            const token = jwt.sign({ id: result[0].id, email: result[0].email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Login successful', token });
        });
    });
};

const getEmployers = (req, res) => {
    employerModel.getAllEmployers((err, result) => {
        if (err) throw err;
         res.json(result);
    });
};

const updateEmployer = (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;


     // Hash password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) throw err;

        employerModel.updateEmployer(id, name, email, hashedPassword, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Employer updated successfully' });
        });
    });
};

const deleteEmployer = (req, res) => {
    const { id } = req.params;

    //based on id we can delete employee
    employerModel.deleteEmployer(id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Employer deleted successfully' });
    });
};

module.exports = {
    registerEmployer,
    loginEmployer,
    getEmployers,
    updateEmployer,
    deleteEmployer
};
