import React from 'react';
import '../styles/ImageList.css';

const ImageList = ({ images, onImageClick }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id} onClick={() => onImageClick(image)}>
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
