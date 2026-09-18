const express = require('express');
const technicianController = require('../controllers/technicianController');
const router = express.Router();

router.get('/', technicianController.getAll);

module.exports = router;