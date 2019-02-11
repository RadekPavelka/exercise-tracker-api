const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    description: String,
    duration: Number,
    userId: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
