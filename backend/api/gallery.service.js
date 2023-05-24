// Global variable to store the images fetched from the Pixabay API (as a mock database)
var IMAGES = []
// The number of images received per API call
const IMAGE_NUMBER = 50
const API_URL = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736`

async function query(filterBy) {
    try {
        // Execute API call to Pixabay only when a category is selected or on the initial app load
        if (filterBy.category || IMAGES.length === 0) {
            const response = await fetch(`${API_URL}&per_page=${IMAGE_NUMBER}&q=${filterBy.category}`)
            const data = await response.json()
            // Clean the data from unnecessary information and store in the IMAGES global variable
            IMAGES = data.hits.map(img => {
                return {
                    id: img.id,
                    collections: img.collections,
                    comments: img.comments,
                    downloads: img.downloads,
                    likes: img.likes,
                    pageURL: img.pageURL,
                    previewURL: img.previewURL,
                    tags: img.tags.split(','), // Tags is a string with comma-separated between tags
                    user: img.user,
                    userImageURL: img.userImageURL,
                    views: img.views,
                    webformatURL: img.webformatURL,
                    date: Date.now()
                }
            })
        }
        // Return the images for the first page
        return getImagesByPage(1)
    } catch (err) {
        ('ERROR: cannot get images', err)
        throw err
    }
}

function getImagesByPage(page) {
    // Define the number of images to be sent to frontend per page
    const pageSize = 9
    // Calculate the starting and ending indices of the subset based on the page number
    const startIdx = (page - 1) * pageSize
    const endIdx = page * pageSize
    const images = IMAGES.slice(startIdx, endIdx)
    return images
}

// Sorts the images based on the provided sorting criteria (date or id)
function getSortImages(sortBy) {
    let key
    if (sortBy.id) key = 'id'
    else if (sortBy.date) key = 'date'
    const sortImages = IMAGES.sort((imgA, imgB) => {
        return (+imgA[key]) - (+imgB[key])
    })
    return sortImages
}

module.exports = {
    query,
    getImagesByPage,
    getSortImages
}
