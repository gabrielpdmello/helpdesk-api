const express = require('express');
const TicketController = require('../controllers/ticketController');
const router = express.Router();

router.get('/', TicketController.getAll);
router.post('/', TicketController.addTicket);
router.get('/:id', TicketController.getTicketById);
router.patch('/:id', TicketController.updateTicket);
router.delete('/:id', TicketController.deleteTicket);

module.exports = router;