const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    organization: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    place: { type: String, required: true },
    skills: { type: [String], required: true }
});

module.exports = mongoose.model('Event', eventSchema);
