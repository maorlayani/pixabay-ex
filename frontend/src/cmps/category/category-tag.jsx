import { useSelector } from "react-redux"

export const CategoryTag = ({ category, onClickHandler }) => {
    const filterBy = useSelector(state => state.galleryModule.filterBy)

    return (
        <span
            // Add a special class to style the selected category
            className={`category-tag ` + (filterBy.category === category ? 'selected' : '')}
            onClick={() => onClickHandler(category)}>
            {category}
        </span>
    )
}