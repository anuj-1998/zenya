import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import g1 from "../src/assets/g1/BBT1.jpg";
import g2 from "../src/assets/g1/BBT2.jpg";
import g3 from "../src/assets/g1/BBT3.jpg";
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const GalleryGrid = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Bintulu 1-Malaysia Bus Terminal",
      description: "",
      images: [
        g1,
        g2,
        g3
      ]
    },
    {
      id: 2,
      title: "ABRA, 4th North",
      description: "Description for ABRA, 4th North. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/FF33A8/FFFFFF?text=North+1",
        "https://via.placeholder.com/800x600/33FFF5/FFFFFF?text=North+2"
      ]
    },
    {
      id: 3,
      title: "GAPT PROGRAM",
      description: "Description for GAPT PROGRAM. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/F5FF33/FFFFFF?text=GAPT+1",
        "https://via.placeholder.com/800x600/8C33FF/FFFFFF?text=GAPT+2",
        "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=GAPT+3",
        "https://via.placeholder.com/800x600/33FFBD/FFFFFF?text=GAPT+4"
      ]
    },
    {
      id: 4,
      title: "BARDEVOTE",
      description: "Description for BARDEVOTE. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/33A8FF/FFFFFF?text=BARDEVOTE+1"
      ]
    },
    {
      id: 5,
      title: "FINANCIAL GRAND",
      description: "Description for FINANCIAL GRAND. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/FF8C33/FFFFFF?text=FINANCE+1",
        "https://via.placeholder.com/800x600/6EFF33/FFFFFF?text=FINANCE+2"
      ]
    },
    {
      id: 6,
      title: "HISTORY OF GALLEY",
      description: "Description for HISTORY OF GALLEY. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/B533FF/FFFFFF?text=HISTORY+1",
        "https://via.placeholder.com/800x600/33FF57/FFFFFF?text=HISTORY+2",
        "https://via.placeholder.com/800x600/FF3333/FFFFFF?text=HISTORY+3"
      ]
    },
    {
      id: 7,
      title: "ORIGINAL POWER",
      description: "Description for ORIGINAL POWER. Multiple images available for this item.",
      images: [
        "https://via.placeholder.com/800x600/33FFEC/FFFFFF?text=POWER+1",
        "https://via.placeholder.com/800x600/FF33F5/FFFFFF?text=POWER+2",
        "https://via.placeholder.com/800x600/33A8FF/FFFFFF?text=POWER+3"
      ]
    }
  ];

  const openModal = (itemIndex: number, imageIndex: number = 0) => {
    setCurrentItemIndex(itemIndex);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(prev => {
      const currentItem = galleryItems[currentItemIndex];
      return prev === 0 ? currentItem.images.length - 1 : prev - 1;
    });
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prev => {
      const currentItem = galleryItems[currentItemIndex];
      return prev === currentItem.images.length - 1 ? 0 : prev + 1;
    });
  };

  const goToPrevItem = () => {
    setCurrentItemIndex(prev => {
      const newIndex = prev === 0 ? galleryItems.length - 1 : prev - 1;
      setCurrentImageIndex(0);
      return newIndex;
    });
  };

  const goToNextItem = () => {
    setCurrentItemIndex(prev => {
      const newIndex = prev === galleryItems.length - 1 ? 0 : prev + 1;
      setCurrentImageIndex(0);
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">GALLERY</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.slice(0, 6).map((item, itemIndex) => (
            <div 
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openModal(itemIndex)}
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-md relative">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                {item.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {item.images.length} images
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">{item.title}</h2>
            </div>
          ))}
          
          {/* Last item centered */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center">
            <div 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openModal(6)}
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-md relative">
                <img 
                  src={galleryItems[6].images[0]} 
                  alt={galleryItems[6].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                {galleryItems[6].images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {galleryItems[6].images.length} images
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">{galleryItems[6].title}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Carousel */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-6xl">
            {/* Enhanced Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-600 z-50 transition-all duration-300 hover:rotate-90 shadow-lg"
              aria-label="Close gallery"
            >
              <FiX size={28} className="transition-transform" />
            </button>
            
            {/* Main image */}
            <div className="relative h-[70vh] overflow-hidden rounded-lg bg-black">
              <img 
                src={galleryItems[currentItemIndex].images[currentImageIndex]} 
                alt={`${galleryItems[currentItemIndex].title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
                aria-label="Previous image"
              >
                <FiChevronLeft size={28} />
              </button>
              <button 
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
                aria-label="Next image"
              >
                <FiChevronRight size={28} />
              </button>

              {/* Item navigation arrows */}
              <button 
                onClick={goToPrevItem}
                className="absolute left-4 top-1/4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
                aria-label="Previous gallery item"
              >
                <FiChevronLeft size={28} className="transform rotate-90" />
              </button>
              <button 
                onClick={goToNextItem}
                className="absolute right-4 top-1/4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
                aria-label="Next gallery item"
              >
                <FiChevronRight size={28} className="transform rotate-90" />
              </button>
            </div>
            
            {/* Image info */}
            <div className="bg-white p-4 rounded-b-lg">
              <h2 className="text-2xl font-bold">{galleryItems[currentItemIndex].title}</h2>
              <p className="text-gray-700">{galleryItems[currentItemIndex].description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Image {currentImageIndex + 1} of {galleryItems[currentItemIndex].images.length}
              </p>
            </div>
            
            {/* Thumbnail navigation for current item */}
            <div className="flex overflow-x-auto py-4 mt-2 gap-2 bg-gray-100 rounded-lg">
              {galleryItems[currentItemIndex].images.map((image, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 cursor-pointer border-2 rounded-md overflow-hidden ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* All items navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-4">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`p-2 rounded cursor-pointer transition-all ${currentItemIndex === index ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-200 hover:bg-gray-300'}`}
                  onClick={() => {
                    setCurrentItemIndex(index);
                    setCurrentImageIndex(0);
                  }}
                >
                  <div className="w-full h-16 overflow-hidden rounded">
                    <img 
                      src={item.images[0]} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs mt-1 truncate text-center font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;