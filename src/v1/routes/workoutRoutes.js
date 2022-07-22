const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("get all workouts");
})

router.get('/:workoutId', (req, res)=> {
  res.send('get an existing workout');
});

router.post('/', (req, res) => {
  res.send('create new workout');
})

router.patch('/:workoutId', (req, res)=> {
  res.send('update an existing workout');
})

router.delete('/workoutId', (req, res) => {
  res.send('Delete an existing workout');
})

module.exports = router;