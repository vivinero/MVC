const mongoose = require('mongoose')


const userData = new mongoose.Schema({
    name: {
    type: String,
    require: [true, "Name is required, kindly fill your name"]
    },

    userName: {
    type: String,
    unique: [true, "This Username Already Exist"],
    require: [true, "Kindly Enter Username "]
    },

    age: {
    type: Number,
    require: [true, "Enter Your Age"]
    },

    scores: {
    type: Object,
    require: [true, "Fill your scores"] 
    }, 

    ismarried: {
    type: Boolean
    },

    subject: {
    type: Array,
    require: [true, "Kindly fill in your subjects"]
    }
});

module.exports = userData