var express = require('express');
var router = express.Router();
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody')

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }).then(data => {
    if (data === null) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      newUser.save().then(data => {
        res.json({result: true})
      })
    } else if (checkBody(req.body, [req.body.name, req.body.email, req.body.password]) === false) {
      res.json({result: false, error: 'Missing or empty fields'})
    } else {
      res.json({result: false, error: 'User already exists'})
    }
  })
})

router.post('/signin', (req, res) => {
  console.log(req.body)
  User.findOne({ email: req.body.email, password: req.body.password }).then(data => {
    if (checkBody(req.body, [req.body.email, req.body.password]) === false) {
      res.json({ result: false, error: 'Missing or empty fields' })
    } else if (data === null) {
      res.json({ result: false, error: 'User not found' })
    } else {
      res.json({result: true})
    }
  })
})

module.exports = router