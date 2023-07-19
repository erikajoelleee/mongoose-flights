const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

// ...

exports.new = function (req, res) {
  const flightId = req.params.id;
  res.render('tickets/new', { flightId });
};

exports.create = function (req, res) {
  const flightId = req.params.id;
  const { seat, price } = req.body;

  const ticket = new Ticket({
    seat,
    price,
    flight: flightId,
  });

  ticket.save(function (err) {
    if (err) {
      console.log(err);
      res.redirect(`/flights/${flightId}/tickets/new`);
    } else {
      res.redirect(`/flights/${flightId}`);
    }
  });
};
