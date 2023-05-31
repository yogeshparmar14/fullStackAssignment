const express = require('express');
const { registration,login,getAlluser,getAllMovies } = require('../modules/authentication/authController.js');
const authValidation =require("../modules/authentication/authValidationSchemas.js");
 

const router = express.Router();

//Public routes
router.post('/register',authValidation,registration);
router.post('/login',login)
router.get('/getAlluser',getAlluser)
router.get('/getAllMovies',getAllMovies)






module.exports = router;