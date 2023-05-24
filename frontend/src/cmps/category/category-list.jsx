import { useDispatch } from "react-redux"
import { setFilterBy, setPage, setGalleryModal } from "../../store/gallery.actions"
import { CategoryTag } from "./category-tag"

export const CategoryList = ({ categories }) => {
    const dispatch = useDispatch()
    // After selecting a category, set the page state to 1 for the first set of images and close the modal
    const setCategoryImages = (category) => {
        dispatch(setFilterBy({ category }))
        dispatch(setPage(1))
        dispatch(setGalleryModal(false, null))
    }
    return (
        <div className="category-list flex center">
            {categories.map(category => {
                return <CategoryTag key={category} category={category} onClickHandler={setCategoryImages} />
            })}
        </div>
    )
} 