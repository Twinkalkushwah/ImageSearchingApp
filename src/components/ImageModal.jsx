import React from 'react';

const ImageModal = ({ image, onClose }) => {
  // Function to format the description
  const formatDescription = (text) => {
    if (!text) return 'No Description Available.';
    const truncated = text.length > 100 ? `${text.slice(0, 100)}...` : text;
    return truncated.charAt(0).toUpperCase() + truncated.slice(1);
  };

  // Function to handle image download as JPG
  const downloadImageAsJPG = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const imgElement = document.createElement('img');
      imgElement.src = URL.createObjectURL(blob);
      
      imgElement.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        ctx.drawImage(imgElement, 0, 0);
        
        canvas.toBlob((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = image.alt_description ? `${image.alt_description}.jpg` : 'download.jpg'; // Set filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 'image/jpeg'); 
      };
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Image'}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '70vh', // Ensures the image fits within the viewport height
            borderRadius: '8px',
            display: 'block',
            marginBottom: '20px',
          }}
        />
        <h3 style={{ margin: '10px 0' }}>{formatDescription(image.description)}</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>
          {formatDescription(image.alt_description)}
        </p>
        <button
          onClick={() => downloadImageAsJPG(image.urls.regular)}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#008080', // Customize button color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition for hover effect
            marginRight: '10px', // Space between buttons
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#006666')} // Darker shade on hover
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#008080')} // Original color
        >
          Download Image
        </button>
        <button
          onClick={onClose}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#FF5733', // Customize go back button color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition for hover effect
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#C7442B')} // Darker shade on hover
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF5733')} // Original color
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
