const dotenv = require('dotenv').config()
const colors = require('colors')
const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/user', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(port,() => console.log(`server started on port ${port}`))