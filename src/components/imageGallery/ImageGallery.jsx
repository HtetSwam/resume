import Gallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './imageGallery.css'

export const ImageGallery=({images})=>{
	const imageList=images?.map(image=>({
		original:image,
		thumbnail:image
	}))
	
	return(
		<div>
			<Gallery items={imageList} showBullets showThumbnails={true}/>
		</div>
	)
}
