const Flight = require('../models/flight');

exports.index = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights, title: 'All Flights' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.new = (req, res) => {
  res.render('flights/new');
};

exports.create = async (req, res) => {
  try {
    const { airline, airport, flightNo, departs } = req.body;
    await Flight.create({ airline, airport, flightNo, departs });
    res.redirect('/flights');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

async function show(req, res) {
    res.render('flights/show', {
        flight: await Flight.findById(req.params.id)
    })
};