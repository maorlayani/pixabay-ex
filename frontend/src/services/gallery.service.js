import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})
export const galleryService = {
    query,
    getImageByPage,
    getCategories
}

// Receive a filterBy object with a category key as a parameter and send it to the backend in the params to fetch images based on the provided category
async function query(filterBy = {}) {
    try {
        const params = { filterBy: JSON.stringify(filterBy) }
        const { data } = await axios.get(`${BASE_URL}gallery/`, { params })
        return data
    } catch (err) {
        console.error('Cannot get images', err)
        throw (err)
    }
}

// Receive the page as a parameter and send it to the backend in the params to fetch the correct images based on the provided page number
async function getImageByPage(page) {
    try {
        const params = { page: JSON.stringify(page) }
        const { data } = await axios.get(`${BASE_URL}gallery/page`, { params })
        return data
    } catch (err) {
        console.error('Cannot get images by page', err)
    }
}

// Return the default categories types
function getCategories() {
    return [
        'backgrounds', 'fashion', 'nature',
        'science', 'education', 'feelings',
        'health', 'people', 'religion',
        'places', 'animals', 'industry',
        'computer', 'food', 'sports',
        'transportation', 'travel', 'buildings',
        'business', 'music'
    ]
}