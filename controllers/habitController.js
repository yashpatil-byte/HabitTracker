const Habit = require('../models/habitsModel');

// GET all habits
const getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST a new habit
const addHabit = async (req, res) => {
    const { name, frequency } = req.body;
    if (!name || !frequency) return res.status(400).json({ message: "Name and frequency are required." });

    try {
        const newHabit = new Habit({ name, frequency });
        await newHabit.save();
        res.status(201).json(newHabit);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT toggle completed
const toggleHabit = async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) return res.status(404).json({ message: "Habit not found" });

        habit.completed = !habit.completed;
        habit.streak = habit.completed ? habit.streak + 1 : 0;
        await habit.save();

        res.json(habit);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE habit
const deleteHabit = async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) return res.status(404).json({ message: "Habit not found" });

        res.json(habit);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getHabits,
    addHabit,
    toggleHabit,
    deleteHabit
};
