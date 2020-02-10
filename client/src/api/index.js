import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getRandomQuote = id => api.get(`/quote/`)

const apis = { getRandomQuote }

export default apis
