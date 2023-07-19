const express = require('express');
const router = express.Router({ mergeParams: true });
const ticketsCtrl = require('../controllers/tickets');

router.get('/new', ticketsCtrl.new);
router.post('/', ticketsCtrl.create);

module.exports = router;
