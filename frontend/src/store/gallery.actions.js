
import { galleryService } from "../services/gallery.service";

export function initialLoad(filterBy) {
    return async (dispatch) => {
        try {
            const images = await galleryService.query(filterBy)
            dispatch({ type: 'SET_IMAGES', images })
        } catch (err) {
            console.error('Cannot load images', err)
        }
    }
}

export function setNewImagesByCategory(filterBy) {
    return async (dispatch) => {
        try {
            const images = await galleryService.query(filterBy, 1)
            dispatch({ type: 'SET_IMAGES', images })
        } catch (err) {
            console.error('Cannot set new images', err)
        }
    }
}

// Execute a new API call to fetch new images after the page state is updated
export function setPage(page) {
    return async (dispatch) => {
        try {
            const images = await galleryService.getImageByPage(page)
            dispatch({ type: 'SET_IMAGES', images })
            dispatch({ type: 'SET_PAGE', page })
        } catch (err) {
            console.error('Cannot set page', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy })
        } catch (err) {
            console.error('Cannot set filterBy', err)
        }
    }
}

export function setGalleryModal(isOpen, type) {
    return (dispatch) => {
        try {
            // isOpen - indicates whether the gallery modal is open or closed
            // type - The type of the modal (either 'category modal' or 'image modal')
            dispatch({ type: 'SET_GELLARY_MODAL', galleryModal: { isOpen, type } })
        } catch (err) {
            console.error('Cannot toggle image modal', err)
        }
    }
}