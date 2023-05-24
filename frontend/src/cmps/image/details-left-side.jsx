export const DetailsLeftSide = ({ image }) => {
    return (
        <div className="details-left-side flex column">
            <a href={image.pageURL} target="_blank">
                <img className="image-preview" src={image.previewURL} />
            </a>
            <span className="title">Created By</span>
            <div className="user-container flex align-center">
                <img className="user-image" src={image.userImageURL} />
                <span className="content">{image.user}</span>
            </div>
        </div>
    )
}