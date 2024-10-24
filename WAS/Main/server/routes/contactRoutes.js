const express = require('express');
const contactController = require('../Controllers/contactController');
const router = express.Router();


router.post('/', contactController.PostContact);

module.exports = router;
