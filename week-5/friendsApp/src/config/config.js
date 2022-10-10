const mongoose = require ('mongoose');

const connectDb =  async () =>{
   await mongoose.connect('mongodb://localhost:27017/friends_db?retryWrites=true&w=majority')
    console.log('connected to database')
}

module.exports = connectDb