const express = require('express')
const router = express.Router()
const {authenticated} = require('../config/auth')

const User = require('../models/User')


router.get('/', (req, res) => {
  res.send('HELLO')
})

router.get('/dashboard', async (req, res) => {
  await User.find({}, (err, result) => {
    if(err) {
    res.send(err)
    }
    else {
      res.send(result)
    }
  }) 
})

module.exports = router