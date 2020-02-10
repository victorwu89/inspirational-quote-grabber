import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c427f5cab6fc545841efe4d18026793829d60040a959e23f035d3bcf8a27b305'
  }
})
