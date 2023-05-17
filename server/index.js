import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import usersRoute from './routes/usersRoute.js'

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

mongoose.connect('mongodb+srv://maaz:7829212918@users.js6hvo3.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB and listening to server."))
.catch((error) => console.log(error))

app.use('/users', usersRoute)