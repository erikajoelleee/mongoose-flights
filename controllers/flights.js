const Flight = require("../models/flight");
const Ticket = require("../models/tickets");

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    res.render("flights/index", { flights, title: "All Flights Available" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

function newFlight(req, res) {
  res.render("flights/new");
}

async function create(req, res) {
  try {
    const { airline, airport, flightNo, departs } = req.body;
    await Flight.create({ airline, airport, flightNo, departs });
    res.redirect("/flights");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

async function show(req, res) {
  try {
    console.log("req.params.id", req.params.id);
    let tickets = await Ticket.find({ flight: req.params.id }).populate(
      "flight"
    );
    res.render("flights/show", {tickets})
    console.log("ticket", ticket);
  } catch (err) {}

  //  Flight.findById(req.params.id, function (err, flight) {
  //     Ticket.find({ flight: flight._id }, function (err, tickets) {
  //       console.log("tickets", tickets);
  //       res.render('flights/show', { flight, tickets });
  //     });
  //   });
}

module.exports = { show, index, new: newFlight, create };

// async function show(req, res) {
//     res.render('flights/show', {
//         flight: await Flight.findById(req.params.id)
//     })
// };
