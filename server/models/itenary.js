const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  username: {
    type: String,
    default: "Anonymous",
  },
  place: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  category: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  isVisited: {
    type: Boolean,
    default: false,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Itinerary", itinerarySchema);
