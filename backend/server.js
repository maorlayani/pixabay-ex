const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static('public'))

// Configuring CORS 
const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
}
app.use(cors(corsOptions))

const galleryRoutes = require('./api/gallery.routes')

// routes
app.use('/api/gallery', galleryRoutes)

const port = 3030
app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})