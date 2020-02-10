import Quote from '../models/quote-model'
import "babel-polyfill"
//_id: req.params.id
const getRandomQuote = async (req, res) => {
    //grab a 'random' quote
    await Quote.aggregate( [ { $sample: { size: 1 } } ], (err, quote) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!quote) {
            return res
                .status(404)
                .json({ success: false, error: `Quote not found`, _id: quote })
        }
        return res.status(200).json({ success: true, data: quote })
    }).catch(err => console.log(err))
}


export default {
  getRandomQuote
}
