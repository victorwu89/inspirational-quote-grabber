//const mongoose = require('mongoose')
import mongoose from 'mongoose'

//TODO Add environment variable so password and url is protected
mongoose
  .connect('mongodb+srv://victorwu:password89@cluster0-1j562.mongodb.net/quotes_Table?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
  .catch(e => {
    console.error('Connection error', e.message)
  })

  const db = mongoose.connection

  //module.exports = db
  export default db
