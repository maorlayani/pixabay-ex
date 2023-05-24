import { GalleryButton } from "./gallery-button"

export const Modal = ({ title, subTitle, contentCmp, closeModal, top, left }) => {

    const setStyle = () => {
        const style = {}
        if (top) style.top = `${top}%`
        if (left) style.left = `${left}%`
        return style
    }
    return (
        <div className="modal flex column align-center" style={setStyle()}>
            <div className="header-container">
                <h2 className="title">{title}</h2>
                <span className="sub-title">{subTitle}</span>
            </div>
            <div className="contnet-container flex center">
                {/* contentCmp is a Component passed as a prop to the Modal component */}
                {contentCmp}
            </div>
            <GalleryButton txt='Close' onClickHandler={closeModal} isDisabled={false} />
        </div>
    )
}