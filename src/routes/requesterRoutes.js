const express = require('express');
const requesterController = require('../controllers/requesterController');
const router = express.Router();

router.get('/', requesterController.getAll);
router.get('/:id', requesterController.getById);
router.post('/', requesterController.post);
router.put('/:id', requesterController.put);
router.delete('/:id', requesterController.delete);

module.exports = router;