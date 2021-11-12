import React, { memo, useState } from 'react'
import Button from '../Button'

function PhotosGallery(props) {
  const { photos } = props

  const [gallery, setGallery] = useState(photos)

  //função para retornar um array onde a comparação é diferente da !== key
  //conect 1 - handleRemove = (key) =gerou  
  const handleRemove = (key) => {
    const newGallery = gallery.filter((img, index) => index !== key) 
    setGallery(newGallery)
  }

  const renderPhotos = (img, key) => {
    return (
      <div>
        <img src={img} />
        {/* //connect 1 - handleRemove(key)*/}
        <Button onClick={() => handleRemove(key)}>
          Remover {key}
        </Button>
      </div>
    )
  }

  return (
    <div>
      {gallery.map(renderPhotos)}
    </div>
  )
}

export default memo(PhotosGallery)