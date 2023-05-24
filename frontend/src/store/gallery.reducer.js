const initialState = {
    images: [],
    filterBy: { category: '', },
    page: 1,
    galleryModal: {
        isOpen: false,
        type: null
    }
}

export function galleryReducer(state = initialState, action = {}) {
    let newState = state

    switch (action.type) {
        case 'SET_IMAGES':
            newState = { ...state, images: [...action.images] }
            break
        case 'SET_FILTER_BY':
            newState = { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }
            break
        case 'SET_PAGE':
            newState = { ...state, page: action.page }
            break
        case 'SET_GELLARY_MODAL':
            newState = { ...state, galleryModal: action.galleryModal }
            break
        default:
    }
    return newState
}