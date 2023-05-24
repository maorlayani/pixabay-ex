import { useState } from 'react'
import UserIcon from '../../assets/svg/user-icon.svg'
export const DetailsLeftSide = ({ image }) => {
    const [userImageSrc, setuserImageSrc] = useState(image.userImageURL)

    const handleImageError = () => {
        setuserImageSrc(UserIcon);
    }
    return (
        <div className="details-left-side flex column">
            <a href={image.pageURL} target="_blank">
                <img className="image-preview" src={image.previewURL} />
            </a>
            <span className="title">Created By</span>
            <div className="user-container flex align-center">
                <img className="user-image" src={userImageSrc} onError={handleImageError} />
                <span className="content">{image.user}</span>
            </div>
        </div>
    )
}