import { Gallery } from './cmps/gallery'
import { useDispatch, useSelector } from 'react-redux'
import { initialLoad, setNewImagesByCategory } from './store/gallery.actions'
import { useEffect } from 'react';

export const App = () => {
  const images = useSelector(state => state.galleryModule.images)
  const filterBy = useSelector(state => state.galleryModule.filterBy)
  const dispatch = useDispatch()

  // Set initial 9 images when app is loaded
  useEffect(() => {
    dispatch(initialLoad(filterBy))
  }, [])

  // Set a new set of 9 images when a new category is selected
  useEffect(() => {
    // Prevent calling the backend during the initial load
    if (filterBy.category) dispatch(setNewImagesByCategory(filterBy))
  }, [filterBy.category])

  return (
    <div className="app">
      {images.length > 0 && <Gallery images={images} />}
    </div>
  )
}