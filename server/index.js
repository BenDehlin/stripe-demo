require('dotenv').config()
const express = require('express')
const app = express()
const stripe = require('stripe')(process.env.SECRET_KEY)
const stripeCtrl = require('./controllers/stripeController')
app.use(express.json())
app.set('stripe', stripe)

app.post('/api/payment', stripeCtrl.makePayment)

const port = 3333
app.listen(port, () => console.log(`Listening on port ${port}`))