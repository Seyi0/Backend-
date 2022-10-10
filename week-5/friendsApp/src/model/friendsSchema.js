const mongoose = require('mongoose')

// import mongoose from 'mongoose';

const friendsSchema = new mongoose.Schema(
 {
    name:{
        type: String,
        require: true
 },
    age:{
        type: String,
 },
 },
 {
    timestamps: true,
 }

);

const FriendsModel = mongoose.model('Friend',friendsSchema);

module.exports = FriendsModel