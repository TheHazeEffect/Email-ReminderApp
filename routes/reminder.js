const express = require('express')
const router = express.Router()
const models = require("../models")
const Reminder = models.Reminder


router.get('/', async  (req,res,next) => {
    try {
        allReminders = await Reminder.findAll()
        res.send(allReminders)
    }catch(error) {
        console.log(error)
        res.status(500).send('There was an internal server error')
    }
})

router.get('/:id', async  (req,res,next) => {
    const {id} = req.params

    try {

        const foundReminder = await Reminder.findByPk(id)
        
        if(!foundReminder){
            res.status(404).send(`Reminder with Id ${id} could not be found`)
            return;
        }
        res.send(foundReminder)
    }catch(error) {
        console.log(error)
        res.status(500).send("there was an internal server error")
    }
})

router.post('/', async  (req,res,next) => {
    const newReminder = req.body
    try {

        result = await Reminder.create(newReminder)
        if(!result){
            res.status(500).send("Could not create new Reminder")
            return;
        }

        res.status(201).send(newReminder)
    }catch(error) {
        console.log(error)
        res.status(500).send("There was an interal server error")
    }
})
router.put('/:id', async  (req,res,next) => {
    const {id} = req.params;
    const updatedReminder = req.body
    try {
        const recordsUpdated = await Reminder.update(updatedReminder, {where : {id:id}})

        if(recordsUpdated[0] === 0){
            res.status(500).send("Reminder could not be updated")
            return;
        }
        res.status(200).send(updatedReminder)
    }catch(error) {
        console.log(error)
        res.status(500).send("there was an interal server error")
    }
})
router.delete('/:id', async  (req,res,next) => {
    const {id} = req.params

    try {
        result = await Reminder.destroy({where: {id:id}})
        if(!result){
            res.status(500).send("Reminder could not be deleted")
            return;
        }
        res.status(200).send("Reminder was succesfully deelted")
    }catch(error) {
        console.log(error)
        res.status(500).send("There was an internal server error")
    }
})

module.exports = router