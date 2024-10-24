// serviceRoutes.js
const express = require('express');
const { getServicePage } = require('../Controllers/serviceController');
const router = express.Router();
router.get('/', getServicePage);
module.exports = router;
