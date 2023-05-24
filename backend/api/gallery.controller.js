const galleryService = require('./gallery.service')

async function getImages(req, res) {
    try {
        const filterBy = JSON.parse(req.query.filterBy)
        const images = await galleryService.query(filterBy)
        res.send(images)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get Images' })
    }
}

async function imagesByPage(req, res) {
    try {
        const page = JSON.parse(req.query.page)
        const images = await galleryService.getImagesByPage(page)
        res.send(images)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get requsted Images' })
    }
}

async function sortedImages(req, res) {
    try {
        const sortBy = JSON.parse(req.query.sortBy)
        const images = await galleryService.getSortImages(sortBy)
        res.send(images)
    } catch (err) {
        res.status(500).send({ err: 'Failed to sort Images' })
    }
}

module.exports = {
    getImages,
    sortedImages,
    imagesByPage
}