const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const rolesRoutes = require('./routes/roleRoutes')
const userRoutes = require('./routes/authRoutes')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', rolesRoutes)
app.use('/api', userRoutes)

app.use(notFound)
app.use(errorHandler)

dotenv.config()
mongoose.connect(process.env.DATABASE, {
}).then(() => {
    console.log("Database connect")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:7000/`)
})