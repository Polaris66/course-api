const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const {Course} = require('../server/models/Course');

require('dotenv').config();

mongoose.connect('mongodb+srv://Polaris:10Degree@mernapptnn.mg8xzjt.mongodb.net/test');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});

// Get All
app.get('/',async (req,res)=>{
    try {
        courses = await Course.find({})
        res.json(courses);
    } catch (error) {
        console.log(error);
    }
})

//Get one
app.get('/:id',async (req,res)=>{
    const {id} = req.params;
    try {
        const course = await Course.findById(id);
        res.json(course);
    } catch (error) {
        res.send(error);
    }
})

//Create one
app.post('/',async (req,res)=>{
    try {
        const course = await Course.create(
            req.body
        )
        res.json(course)
    } catch (error) {
        console.log(error);
    }
    
})

//Delete one
app.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    try {
        const course = await Course.findByIdAndDelete(id);
        res.json(course);
    } catch (error) {
        res.send(error);
    }
})

//Update one
app.put('/:id',async (req,res)=>{
    
    const {id} = req.params;
    try {
        const course = await Course.findByIdAndUpdate(id,req.body);
        res.json(course);
    } catch (error) {
        res.send(error);
    }
})
