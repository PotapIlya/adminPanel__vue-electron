const express = require('express');
const router = express();
// const authMiddleware = require('./../middleware/authMiddleware');
//
const databaseController = require('./../controllers/databaseController')

router.post('/database/create', databaseController.create );




module.exports = router;

