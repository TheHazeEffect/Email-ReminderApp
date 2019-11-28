var express = require('express');
var router = express.Router();
const models = require("../models")
const User = models.User

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    let allUsers = await User.findAll()
    res.send(allUsers);
  } catch (error) {
    console.log(error)
    res.status(500).send("An Error Has occured")
  }
});

router.get('/reminders', async function (req, res, next) {
  try {
    let allUsers = await User.findAll({ include: ['reminders'] })
    console.log(allUsers)
    res.send(allUsers);
  } catch (error) {
    console.log(error)
    res.status(500).send("An Error Has occured")
  }
});

module.exports = router;
