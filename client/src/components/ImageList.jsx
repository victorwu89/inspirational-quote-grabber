import React from 'react'
import ImageCard from './ImageCard'

const ImageList = props => {
  const image = props.images.map( function(image, index) {
    //index equates  to a random int than send it
    if(index === 3){
      return <ImageCard key={image.id} image={image} />
    }
    return ''
  })

  return (
    <div className="image-list">{image}</div>
  )
}

export default ImageList
