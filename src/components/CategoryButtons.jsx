// src/components/CategoryButtons.jsx
import React from 'react';

const categories = [
  'Travel', 'Nature', 'Animals', 'Technology', 'Food', 'Art', 
  'Architecture', 'Fashion', 'People', 'Sports', 'Music', 'Business'
];

const CategoryButtons = ({ onCategoryClick }) => {
  return (
    <div style={containerStyle}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#5D3FD3')} // Hover effect color
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#3A3A3A')} // Original color
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  gap: '15px',
  flexWrap: 'wrap',
};

const buttonStyle = {
  padding: '12px 20px', // Increased width for the buttons
  borderRadius: '25px', // Rounded corners for a stylish look
  backgroundColor: '#3A3A3A', // Neutral dark background color
  color: '#FFF',
  border: '2px solid',
 // borderImage: 'linear-gradient(45deg, #FF4081, #FFCA28, #00E676, #3F51B5) 1', // Multicolor gradient border
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.2s',
  outline: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
};



export default CategoryButtons;
