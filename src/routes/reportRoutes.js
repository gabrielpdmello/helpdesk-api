const express = require('express');
const ReportController = require('../controllers/reportController');
const router = express.Router();

router.get('/chamados-por-status', ReportController.getTicketCountPerStatus);

module.exports = router;