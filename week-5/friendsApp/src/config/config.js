const mongoose = require ('mongoose');

const connectDb = () =>{
    mongoose.connect('mongodb+srv://Seyi:seyi@cluster0.vqraara.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected to database')
}

module.exports = connectDb