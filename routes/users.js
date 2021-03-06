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

//get user by Id
router.get('/:id', async (req,res,bext) =>{
  try {
    const id = req.params.id
    
    const Founduser = await User.findByPk(id)
    if(!Founduser){
      res.status(404).send(`user with Id ${id} could not be found`)
      return;
    }
    res.send(Founduser.get())
  }catch(error){
    console.log(error)
    res.status(500).send("There was an internal server errror")
  }
})

//get users and their reminders 
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

//add user
router.post('/', async (req,res,next) => {
  const Newuser = req.body
  try {
    
    if(!await User.create(Newuser)){
      res.status(500).send("Could not create new user")
      return;
    }
  
    res.status(201).send(Newuser)
  }catch(error) {
    console.log(error)
    res.status(500).send("An Error has occured")
  }
})

router.put('/:id', async (req,res,next) => {
  const {id} = req.params
  const updatedUser = req.body
  try{
    
    const recordsupdated = await User.update(updatedUser,{where: { id:id}})
    
    if(recordsupdated[0] === 0){
      res.status(500).send("User could not be updated")
      return;
    }

    res.status(200).send(updatedUser)
  }catch(error) {
    console.log(error)
    res.status(500).send("There was an internal server error")
  }
})

router.delete('/:id', async (req,res,nexy) => {
  const {id} = req.params

  try {

    result = await User.destroy({where: {id:id}})
    if(!result){
      res.status(500).send("The user could not be deleted")
      return;
    }
    res.status(200).send("user successfully deleted")
  }catch(error) {
    console.log(error)
    res.status(500).send("there was an internal server error")
  }
})



module.exports = router;
