// components/ImageGallery.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sb1 from '../src/assets/the-spring-bintulu/SB1.jpg';
import sb2 from '../src/assets/the-spring-bintulu/SB2.jpg';
import sb3 from '../src/assets/the-spring-bintulu/SB3.jpg';
import sb4 from '../src/assets/the-spring-bintulu/SB4.jpg';
import sb6 from '../src/assets/the-spring-bintulu/SB6.jpg';
import sb7 from '../src/assets/the-spring-bintulu/SB7.jpg';
import sb8 from '../src/assets/the-spring-bintulu/SB8.jpg';
import sb9 from '../src/assets/the-spring-bintulu/SB9.jpg';
import sb10 from '../src/assets/the-spring-bintulu/SB10.jpg';
import sb11 from '../src/assets/the-spring-bintulu/SB11.jpg';
import sb13 from '../src/assets/the-spring-bintulu/SB13.jpg';
import sb14 from '../src/assets/the-spring-bintulu/SB14.jpg';
import sb15 from '../src/assets/the-spring-bintulu/SB15.jpg';
import sb16 from '../src/assets/the-spring-bintulu/SB16.jpg';
import sb17 from '../src/assets/the-spring-bintulu/SB17.jpg';
import sb18 from '../src/assets/the-spring-bintulu/SB18.jpg';


import csm1 from '../src/assets/bintulu-commerce-square-mall/CSM1.jpg';
import csm2 from '../src/assets/bintulu-commerce-square-mall/CSM2.jpg';
import csm3 from '../src/assets/bintulu-commerce-square-mall/CSM3.jpg';
import csm4 from '../src/assets/bintulu-commerce-square-mall/CSM4.jpg';
import csm5 from '../src/assets/bintulu-commerce-square-mall/CSM5.jpg';
import csm6 from '../src/assets/bintulu-commerce-square-mall/CSM6.jpg';
import csm7 from '../src/assets/bintulu-commerce-square-mall/CSM7.jpg';
import csm8 from '../src/assets/bintulu-commerce-square-mall/CSM8.jpg';
import csm9 from '../src/assets/bintulu-commerce-square-mall/CSM9.jpg';
import csm10 from '../src/assets/bintulu-commerce-square-mall/CSM10.jpg';
import csm11 from '../src/assets/bintulu-commerce-square-mall/CSM11.jpg';
import csm12 from '../src/assets/bintulu-commerce-square-mall/CSM12.jpg';
import csm13 from '../src/assets/bintulu-commerce-square-mall/CSM13.jpg';
import csm14 from '../src/assets/bintulu-commerce-square-mall/CSM14.jpg';
import csm15 from '../src/assets/bintulu-commerce-square-mall/CSM15.jpg';
import csm16 from '../src/assets/bintulu-commerce-square-mall/CSM16.jpg';
import csm18 from '../src/assets/bintulu-commerce-square-mall/CSM18.jpg';
import csm19 from '../src/assets/bintulu-commerce-square-mall/CSM19.jpg';
import csm20 from '../src/assets/bintulu-commerce-square-mall/CSM20.jpg';
import csm21 from '../src/assets/bintulu-commerce-square-mall/CSM21.jpg';
import csm22 from '../src/assets/bintulu-commerce-square-mall/CSM22.jpg';
import csm24 from '../src/assets/bintulu-commerce-square-mall/CSM24.jpg';
import csm25 from '../src/assets/bintulu-commerce-square-mall/CSM25.jpg';
import csm26 from '../src/assets/bintulu-commerce-square-mall/CSM26.jpg';
import csm27 from '../src/assets/bintulu-commerce-square-mall/CSM27.jpg';
import csm28 from '../src/assets/bintulu-commerce-square-mall/CSM28.jpg';
import csm29 from '../src/assets/bintulu-commerce-square-mall/CSM29.jpg';

import mlc1 from '../src/assets/miri-marina-land/MLC1.jpg';
import mlc2 from '../src/assets/miri-marina-land/MLC2.jpg';
import mlc3 from '../src/assets/miri-marina-land/MLC3.jpg';
import mlc4 from '../src/assets/miri-marina-land/MLC4.jpg';
import mlc6 from '../src/assets/miri-marina-land/MLC6.jpg';
import mlc7 from '../src/assets/miri-marina-land/MLC7.jpg';

import bw1 from '../src/assets/bintulu-waterfront-hotel/bw1.jpeg';
import bw2 from '../src/assets/bintulu-waterfront-hotel/bw2.jpeg';
import bw3 from '../src/assets/bintulu-waterfront-hotel/bw3.jpeg';
import bw4 from '../src/assets/bintulu-waterfront-hotel/bw4.jpeg';

const mlcImages = [mlc1, mlc2, mlc3, mlc4, mlc6, mlc7];


const csmImages = [
  csm1, csm2, csm3, csm4, csm5, csm6, csm7, csm8, csm9, csm10,
  csm11, csm12, csm13, csm14, csm15, csm16, csm18, csm19, csm20,
  csm21, csm22, csm24, csm25, csm26, csm27, csm28, csm29,
];

const sbImages = [
  sb1, sb2, sb3, sb4, sb6, sb7, sb8, sb9,
  sb10, sb11, sb13, sb14, sb15, sb16, sb17, sb18
];
const bwImages = [
  bw1, bw2, bw3, bw4
];
// Use more accurate typing
const images: Record<string, string[]> = {
  'Bintulu Commerce Square Mall': csmImages,
  'Bintulu Waterfront Hotel': bwImages,
  'Miri Marina Land': mlcImages,
  'The Spring Bintulu': sbImages,
};

// Properly type arrow props
interface ArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full cursor-pointer shadow-md"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-6 h-6 text-gray-700" />
  </div>
);

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-50 bg-white p-2 rounded-full cursor-pointer shadow-md"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
  </div>
);

const ImageGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleClick = (category: string) => {
    setActiveCategory(category);
    setShowCarousel(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 " style={{ paddingTop: '0px', paddingBottom: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
      {Object.entries(images).map(([label, imageList]) => (
        <div
          key={label}
          className="cursor-pointer text-center group"
          onClick={() => handleClick(label)}
        >
          <img
            src={imageList[0]}
            alt={label}
            className="w-full h-48 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
          />
          <p className="mt-2 text-lg font-semibold">{label}</p>
        </div>

      ))}

      {showCarousel && activeCategory && (
        <div className="fixed inset-0 bg-transparent bg-black bg-opacity-30 backdrop-blur z-50 flex items-center justify-center">
          <div className="relative w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-lg p-4">
            <button
              className="absolute top-2 right-1 text-gray-800 z-50"
              onClick={() => setShowCarousel(false)}
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <Slider {...settings}>
              {images[activeCategory].map((src, idx) => (
                <div key={idx}>
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[400px] object-cover rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
