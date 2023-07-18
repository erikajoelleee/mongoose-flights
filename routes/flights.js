const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights');
const Flight = require('../models/flight');

router.get('/', flightController.index);
router.get('/new', flightController.new);
router.post('/', flightController.create);

router.get('/:id', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render('flights/show', { flight });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  router.post('/:id/destinations', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
      const { airport, arrival } = req.body;
      flight.destinations.push({ airport, arrival });
      await flight.save();
      res.redirect(`/flights/${flight._id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;
