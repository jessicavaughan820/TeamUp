import React from 'react';

const ImageViewer = ({ images }) => {
  return (
    <div id='image-viewer'>
      <img src={images[0]} alt='recent game' height='901' width='500' />
    </div>
  )
}

export default ImageViewer;