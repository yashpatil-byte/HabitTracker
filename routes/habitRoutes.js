const express = require('express');
const router = express.Router();
const { getHabits, addHabit, toggleHabit, deleteHabit } = require('../controllers/habitController');

router.get('/', getHabits);
router.post('/', addHabit);
router.put('/:id/complete', toggleHabit);
router.delete('/:id', deleteHabit);

module.exports = router;
