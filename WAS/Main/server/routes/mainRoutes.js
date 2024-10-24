// mainRoutes.js
const express = require('express');
const { getMainPage } = require('../Controllers/mainController');
const router = express.Router();
router.get('/', getMainPage);
module.exports = router;
