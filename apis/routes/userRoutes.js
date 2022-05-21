const express = require('express');
const addUser = require('../controllers/userController');

const router = express.Router();

router.post('/user',  function(req, res){
    addUser
  });



module.exports = {
    routes: router
}