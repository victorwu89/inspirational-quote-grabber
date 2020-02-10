import express from 'express'
import QuoteCtrl from '../controllers/quote-controller'
import "babel-polyfill"

const router = express.Router()

router.get('/quote/', QuoteCtrl.getRandomQuote)

export default router
