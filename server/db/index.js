//const mongoose = require('mongoose')
import mongoose from 'mongoose'

//TODO Add environment variable
mongoose
  .connect('' , { useNewUrlParser: true, useUnifiedTopology: true})
  .catch(e => {
    console.error('Connection error', e.message)
  })

  const db = mongoose.connection

  //module.exports = db
  export default db
