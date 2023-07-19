const Flight = require('../models/flight');


async function create(req, res) {
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
  }


module.exports = {create};
