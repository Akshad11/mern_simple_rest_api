const { log } = require('console')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const DataColl = require('../model/schema')


router.get('/', (req, res) => {
    res.send('Hello')
})

router.post('/new', async (req, res) => {
    const { Name, PhoneNo, Subject, Attendance } = req.body
    console.log(Name);

    try {
        const gets = await DataColl({
            Name, PhoneNo, Subject, Attendance
        })
        console.log(gets);
        const add = gets.save()
        console.log(add);
        res.send(add)
    } catch {
        res.send(e);
    }
})
router.get('/new/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const getMen = await DataColl.findById(_id)
        res.status(201).send(getMen)
    } catch (e) {
        res.send(e);
    }

})

router.patch('/new/:id', async (req, res) => {
    console.log(req.body);

    try {
        const _id = req.params.id;
        const getMen = await DataColl.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(getMen)
    } catch (e) {
        res.send(e);
    }

})

router.get('/new/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const getMen = await DataColl.findById(_id)
        res.status(201).send(getMen)
    } catch (e) {
        res.send(e);
    }

})
router.get('/new/:id', async (req, res) => {

    try {
        const _id = req.params.id;
        const getMen = await DataColl.find()
        res.status(201).send(getMen)
    } catch (e) {
        res.send(e);
    }

})


router.delete('/new/:id', async (req, res) => {
    try {
        const getMen = await DataColl.findByIdAndDelete(req.params.id);
        res.send(getMen);
    } catch (e) {
        res.status(500).send(e)
    }
})








module.exports = router;