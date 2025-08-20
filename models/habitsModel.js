const mongoose = require('mongoose');
const Counter = require('./counterModel');

const habitSchema = new mongoose.Schema({
    _id: { type: Number },  // sequential id
    name: { type: String, required: true },
    frequency: { type: String, required: true },
    completed: { type: Boolean, default: false },
    streak: { type: Number, default: 0 }
});

// Increment _id automatically before saving
habitSchema.pre('save', async function(next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { name: 'habitId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this._id = counter.seq;
    }
    next();
});

module.exports = mongoose.model('Habit', habitSchema);
