const express = require('express')
const router = express.Router()

const User = require('../models/User')


router.get('/', (req, res) => {
  res.send('HELLO')
})

router.get('/dashboard', async (req, res) => {
  await User.find({}, (err, result) => {
    if(err) {
    res.json(err)
    }
    else {
      res.json(result)
    }
  }) 
})

module.exports = router