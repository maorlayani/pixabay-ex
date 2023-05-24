import { useEffect, useState } from "react"
import { GalleryButton } from "./gallery-button"
import { Modal } from "./modal"
import { CategoryList } from "./category/category-list"
import { GalleryImage } from "./gallery-image"
import PixabayLogo from "../assets/svg/pixabay-logo.svg"
import { setPage, setGalleryModal } from "../store/gallery.actions"
import { useDispatch, useSelector } from "react-redux"
import { galleryService } from "../services/gallery.service"

export const Gallery = ({ images }) => {
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const dispatch = useDispatch()
    const page = useSelector(state => state.galleryModule.page)
    const galleryModal = useSelector(state => state.galleryModule.galleryModal)

    // Handle the state of pagination buttons based on the current page number and the number of images
    useEffect(() => {
        if (page <= 1) setIsPrevDisabled(true)
        else if (images.length < 9 && !isPrevDisabled) setIsNextDisabled(true)
    }, [page])

    const onGoNextPage = () => {
        dispatch(setPage(page + 1))
        // Enable the prev button when the next button is clicked
        if (isPrevDisabled) setIsPrevDisabled(false)
    }
    const onGoPrevPage = () => {
        dispatch(setPage(page - 1))
        // Enable the next button when the prev button is clicked
        if (isNextDisabled) setIsNextDisabled(false)
    }

    const toggleModal = (type = null) => {
        // If a type value is provided, the modal should be opened. Otherwise, if the type is null, the modal should be closed
        const isOpen = type ? true : false
        dispatch(setGalleryModal(isOpen, type))
    }
    return (
        <div className="gallery flex column center">
            <div className="gallery-title-container flex align-center">
                <span className="gallery-title">Photo Gallery by</span>
                <img className="pixabay-logo" src={PixabayLogo} />
            </div>
            <div className="buttons-container flex">
                <GalleryButton txt='Prev'
                    onClickHandler={onGoPrevPage}
                    isDisabled={isPrevDisabled} />
                <GalleryButton txt='Categories'
                    onClickHandler={toggleModal}
                    isDisabled={false}
                    type='categories' />
                <GalleryButton txt='Next'
                    onClickHandler={onGoNextPage}
                    isDisabled={isNextDisabled} />
            </div>
            <div className="gallery-container">
                {images.map(img => {
                    return <GalleryImage key={img.id} image={img} toggleModal={toggleModal} />
                })}
            </div>
            <span className="page">page {page}</span>
            {galleryModal.isOpen && galleryModal.type === 'categories' &&
                <Modal
                    title='Categories'
                    subTitle='Select photos by category'
                    contentCmp={<CategoryList categories={galleryService.getCategories()} />}
                    closeModal={toggleModal}
                />}
        </div>
    )
}