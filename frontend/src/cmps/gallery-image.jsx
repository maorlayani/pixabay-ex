import { useState } from "react"
import { useSelector } from "react-redux"
import { ImageDetails } from "./image/image-details"
import { ImageLoader } from "./image/image-loader"
import { Modal } from "./modal"

export const GalleryImage = ({ image, toggleModal }) => {
    const galleryModal = useSelector(state => state.galleryModule.galleryModal)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="gallery-image-container">
            {/* Render an image loader until the image finishes loading. */}
            {isLoading && <ImageLoader />}
            <img className="gallery-image"
                src={image.webformatURL}
                onLoad={() => setIsLoading(false)}
                // Each image modal has a unique modal type to prevent multiple overlapping opened modals
                onClick={() => toggleModal(`image-${image.id}`)}
            />
            {galleryModal.isOpen && galleryModal.type === `image-${image.id}` &&
                <Modal title='Photo Details'
                    closeModal={toggleModal}
                    subTitle=''
                    top={15}
                    left={30}
                    contentCmp={<ImageDetails image={image}
                    />}
                />}
        </div>
    )
}