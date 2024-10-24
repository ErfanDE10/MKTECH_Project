// aboutRoutes.js
const express = require('express');
const { getAboutPage } = require('../Controllers/aboutController');
const router = express.Router();
router.get('/', getAboutPage);
module.exports = router;
