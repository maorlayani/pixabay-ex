
export const GalleryButton = ({ txt, onClickHandler, isDisabled, type }) => {
    return (
        <button className="gallery-button"
            // If a type is provided, the modal should be opened
            onClick={() => {
                if (type) onClickHandler(type)
                else onClickHandler()
            }}
            disabled={isDisabled}>
            {txt}
        </button>
    )
}