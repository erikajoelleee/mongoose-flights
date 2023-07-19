const Flight = require('../models/flight');
const Ticket = require('../models/tickets');

// ...

function newTicket (req, res) {
  const flightId = req.params.id;
  res.render('tickets/new', { flightId });
};



function create (req, res) {
  const flightId = req.params.id;
  const { seat, price } = req.body;

  const ticket = new Ticket({
    seat,
    price,
    flight: flightId,
  });

  ticket.save()
  res.redirect(`/flights/${flightId}`);
    
  };


module.exports = {new: newTicket, create};