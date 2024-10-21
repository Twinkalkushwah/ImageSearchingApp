import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import ImageModal from './components/ImageModal';
import LoadingSpinner from './components/LoadingSpinner';
import CategoryButtons from './components/CategoryButtons'; 
import "./styles/App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = 'X3uMFIPv6OwXYh2X0z_4j9dmHVLE9OMHk2ihI0him0s';

  useEffect(() => {
    const fetchDefaultImages = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
          params: { per_page: 20 },
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching default images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDefaultImages();
  }, []);

  const onSearchSubmit = async (term) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        params: { query: term, per_page: 20 },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSearchFunction = async (term) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        params: { query: term, per_page: 20 },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onCategoryClick = async (category) => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        params: { query: category, per_page: 20 },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error(`Error fetching images for category ${category}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const onImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Picture Perfect Search</h1>
        <p>Picture Your Ideas with Perfect Images!</p>
      </header>
      <SearchBar onSearch={onSearchFunction} clearInputAfterSearch={false} />

      <CategoryButtons onCategoryClick={onCategoryClick} />
      {isLoading ? (
        <LoadingSpinner />
      ) : images.length > 0 ? (
        <ImageList images={images} onImageClick={onImageClick} />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            border: '2px dashed #FF5733',
            borderRadius: '10px',
            margin: '20px',
            background: 'rgba(255, 87, 51, 0.1)',
          }}
        >
          <h2 style={{
            color: '#FF5733',
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}>
            Sorry, No Results Found!
          </h2>
        </div>
      )}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
  
  
};

export default App;
