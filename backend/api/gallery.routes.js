const express = require('express')
const { getImages, imagesByPage, sortedImages } = require('./gallery.controller')

const router = express.Router()

router.get('/', getImages)
router.get('/page', imagesByPage)
router.get('/sort', sortedImages)

module.exports = router     