const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController.js');

//middleware
const authMiddleware = require('../midleware/authMiddleware.js');

// Public routes
router.post('/register', employerController.registerEmployer);
router.post('/login', employerController.loginEmployer);

// Protected routes
router.get('/employers', authMiddleware, employerController.getEmployers);
router.put('/employer/:id', authMiddleware, employerController.updateEmployer);
router.delete('/employer/:id', authMiddleware, employerController.deleteEmployer);

module.exports = router;
