//const mongoose = require('mongoose')
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Quote = new Schema(
    {
        quote: { type: String, required: true },
        author: { type: String, required: true },
    },
    { timestamps: true },
)

export default mongoose.model('quotes', Quote)
