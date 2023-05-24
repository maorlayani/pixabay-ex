
import { CategoryList } from "../category/category-list"
import { DetailsLeftSide } from "./details-left-side"
import { DetailsRightSide } from "./details-right-side"

export const ImageDetails = ({ image }) => {
    return (
        <div className="image-details flex column align-start">
            <div className="main-content flex align-start">
                <DetailsLeftSide image={image} />
                <DetailsRightSide image={image} />
            </div>
            <div className="bottom-content flex column align-start">
                <span className="title">Tags</span>
                <CategoryList categories={image.tags} />
            </div>
        </div>
    )
}