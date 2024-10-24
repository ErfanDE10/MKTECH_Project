const express = require('express');
const contactController = require('../Controllers/contactController');
const router = express.Router();


router.post('/', contactController.PostQuickConsult);

module.exports = router;
