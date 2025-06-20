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

import sb1 from '../src/assets/the-spring-bintulu/SB main photo.jpg'
import sb2 from '../src/assets/the-spring-bintulu/SB1.jpg';
import sb3 from '../src/assets/the-spring-bintulu/SB2.jpg';
import sb4 from '../src/assets/the-spring-bintulu/SB3.jpg';
import sb5 from '../src/assets/the-spring-bintulu/SB4.jpg';
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


import csm1 from '../src/assets/bintulu-commerce-square-mall/CSM main photo.jpeg'
import csm2 from '../src/assets/bintulu-commerce-square-mall/CSM1.jpg';
import csm3 from '../src/assets/bintulu-commerce-square-mall/CSM2.jpg';
import csm4 from '../src/assets/bintulu-commerce-square-mall/CSM3.jpg';
import csm5 from '../src/assets/bintulu-commerce-square-mall/CSM4.jpg';
import csm6 from '../src/assets/bintulu-commerce-square-mall/CSM5.jpg';
import csm7 from '../src/assets/bintulu-commerce-square-mall/CSM6.jpg';
import csm8 from '../src/assets/bintulu-commerce-square-mall/CSM7.jpg';
import csm9 from '../src/assets/bintulu-commerce-square-mall/CSM8.jpg';
import csm10 from '../src/assets/bintulu-commerce-square-mall/CSM9.jpg';
import csm11 from '../src/assets/bintulu-commerce-square-mall/CSM10.jpg';
import csm12 from '../src/assets/bintulu-commerce-square-mall/CSM11.jpg';
import csm13 from '../src/assets/bintulu-commerce-square-mall/CSM12.jpg';
import csm14 from '../src/assets/bintulu-commerce-square-mall/CSM13.jpg';
import csm15 from '../src/assets/bintulu-commerce-square-mall/CSM14.jpg';
import csm16 from '../src/assets/bintulu-commerce-square-mall/CSM15.jpg';
import csm17 from '../src/assets/bintulu-commerce-square-mall/CSM16.jpg';
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
import csm32 from '../src/assets/bintulu-commerce-square-mall/CSM32.webp'

import mlc1 from '../src/assets/miri-marina-land/MLC Main Photo.jpg'
import mlc2 from '../src/assets/miri-marina-land/MLC1.jpg';
import mlc3 from '../src/assets/miri-marina-land/MLC2.jpg';
import mlc4 from '../src/assets/miri-marina-land/MLC3.jpg';
import mlc5 from '../src/assets/miri-marina-land/MLC4.jpg';
import mlc6 from '../src/assets/miri-marina-land/MLC6.jpg';
import mlc7 from '../src/assets/miri-marina-land/MLC7.jpg';
import mlc8 from '../src/assets/miri-marina-land/MLC8.jpg'
import mlc9 from '../src/assets/miri-marina-land/MLC9.jpg';
import mlc10 from '../src/assets/miri-marina-land/MLC10.jpg';
import mlc11 from '../src/assets/miri-marina-land/MLC11.jpg';
import mlc12 from '../src/assets/miri-marina-land/MLC12.jpg'; 
import mlc13 from '../src/assets/miri-marina-land/MLC13.jpg';
import mlc14 from '../src/assets/miri-marina-land/MLC14.jpg';

import bw1 from '../src/assets/bintulu-waterfront-hotel/bw1.jpeg';
import bw2 from '../src/assets/bintulu-waterfront-hotel/bw2.jpeg';
import bw3 from '../src/assets/bintulu-waterfront-hotel/bw3.jpeg';
import bw4 from '../src/assets/bintulu-waterfront-hotel/bw4.jpeg';
import bw5 from '../src/assets/bintulu-waterfront-hotel/bw5.jpeg';
import bw6 from '../src/assets/bintulu-waterfront-hotel/bw6.jpeg';


import bwp1 from '../src/assets/bintulu-waterfront-promenade/BWP Main photo.jpg'
import bwp2 from '../src/assets/bintulu-waterfront-promenade/BWP2.jpg';
import bwp3 from '../src/assets/bintulu-waterfront-promenade/BWP3.jpg';
import bwp6 from '../src/assets/bintulu-waterfront-promenade/BWP6.jpg';
import bwp7 from '../src/assets/bintulu-waterfront-promenade/BWP7.jpg';
import bwp8 from '../src/assets/bintulu-waterfront-promenade/BWP8.jpg';
import bwp9 from '../src/assets/bintulu-waterfront-promenade/BWP9.jpg';
import bwp12 from '../src/assets/bintulu-waterfront-promenade/BWP12.jpg';
import bwp13 from '../src/assets/bintulu-waterfront-promenade/BWP13.jpg';
import bwp14 from '../src/assets/bintulu-waterfront-promenade/BWP14.jpg';
import bwp15 from '../src/assets/bintulu-waterfront-promenade/BWP15.jpg';

import pec1 from "../src/assets/bintulu-parkcity-everly-hotel/PEC main photo.jpg"
import pec2 from '../src/assets/bintulu-parkcity-everly-hotel/PEC1.jpg';
import pec3 from '../src/assets/bintulu-parkcity-everly-hotel/PEC2.jpg';
import pec4 from '../src/assets/bintulu-parkcity-everly-hotel/PEC3.webp';
import pec5 from '../src/assets/bintulu-parkcity-everly-hotel/PEC4.webp';
import pec6 from '../src/assets/bintulu-parkcity-everly-hotel/PEC5.jpg';
import pec7 from '../src/assets/bintulu-parkcity-everly-hotel/PEC6.webp';
import pec8 from '../src/assets/bintulu-parkcity-everly-hotel/PEC7.webp';
import pec9 from '../src/assets/bintulu-parkcity-everly-hotel/PEC8.webp';
import pec10 from '../src/assets/bintulu-parkcity-everly-hotel/PEC9.webp';
import pec11 from '../src/assets/bintulu-parkcity-everly-hotel/PEC10.webp';
import pec12 from '../src/assets/bintulu-parkcity-everly-hotel/PEC11.webp';
import pec13 from '../src/assets/bintulu-parkcity-everly-hotel/PEC12.jpg';
import pec14 from '../src/assets/bintulu-parkcity-everly-hotel/PEC14.jpg';
import pec15 from '../src/assets/bintulu-parkcity-everly-hotel/PEC15.jpg';
import pec16 from '../src/assets/bintulu-parkcity-everly-hotel/PEC16.webp';
import pec17 from '../src/assets/bintulu-parkcity-everly-hotel/PEC17.jpg';
import pec19 from '../src/assets/bintulu-parkcity-everly-hotel/PEC19.jpg';
import pec20 from '../src/assets/bintulu-parkcity-everly-hotel/PEC20.webp';
import pec21 from '../src/assets/bintulu-parkcity-everly-hotel/PEC21.jpg';
import pec22 from '../src/assets/bintulu-parkcity-everly-hotel/PEC22.jpg';
import pec23 from '../src/assets/bintulu-parkcity-everly-hotel/PEC23.jpg';
import pec24 from '../src/assets/bintulu-parkcity-everly-hotel/PEC24.jpg';
import pec25 from '../src/assets/bintulu-parkcity-everly-hotel/PEC25.webp';
import pec26 from '../src/assets/bintulu-parkcity-everly-hotel/PEC26.jpg';
import pec27 from '../src/assets/bintulu-parkcity-everly-hotel/PEC27.webp';
import pec28 from '../src/assets/bintulu-parkcity-everly-hotel/PEC28.jpg';
import pec30 from '../src/assets/bintulu-parkcity-everly-hotel/PEC30.jpg';
import pec31 from '../src/assets/bintulu-parkcity-everly-hotel/PEC31.jpg';
import pec32 from '../src/assets/bintulu-parkcity-everly-hotel/PEC32.webp';
import pec33 from '../src/assets/bintulu-parkcity-everly-hotel/PEC33.jpg';
import pec35 from '../src/assets/bintulu-parkcity-everly-hotel/PEC35.jpg';

import bbt1 from '../src/assets/bintulu-malaysia bus-terminal/BBT1.jpg';
import bbt2 from '../src/assets/bintulu-malaysia bus-terminal/BBT2.jpeg';
import bbt3 from '../src/assets/bintulu-malaysia bus-terminal/BBT3.jpeg';

import pier1 from "../src/assets/pier/P99 main photo.jpeg"
import pier2 from '../src/assets/pier/pier1.jpeg';
import pier3 from '../src/assets/pier/pier2.jpeg';
import pier4 from '../src/assets/pier/pier3.jpeg';
import pier5 from '../src/assets/pier/pier4.jpeg';
import pier6 from '../src/assets/pier/pier5.jpeg';
import pier7 from '../src/assets/pier/pier6.jpeg';
import pier8 from '../src/assets/pier/pier7.jpeg';
import pier9 from '../src/assets/pier/pier8.jpg';
import pier10 from '../src/assets/pier/pier9.jpg';
import pier11 from '../src/assets/pier/pier10.jpeg';
import pier12 from '../src/assets/pier/pier11.jpeg';
import pier13 from '../src/assets/pier/pier12.jpg';
import pier14 from "../src/assets/pier/IMG_2512.jpg"
import pier15 from "../src/assets/pier/IMG_2513.jpg"
import pier16 from "../src/assets/pier/IMG_2514.jpg"
import pier17 from "../src/assets/pier/IMG_2515.jpg"  
import pier18 from "../src/assets/pier/IMG_2516.jpg"
import pier19 from "../src/assets/pier/IMG_2520.jpg"
import pier20 from "../src/assets/pier/IMG_2525.jpg"
import pier21 from "../src/assets/pier/IMG_2533.jpg"
import pier22 from "../src/assets/pier/IMG_2534.jpg"
import pier23 from "../src/assets/pier/IMG_2536.jpg"
import pier24 from "../src/assets/pier/IMG_2541.jpg"
import pier25 from "../src/assets/pier/IMG_2549.jpg"
import pier26 from "../src/assets/pier/IMG_2559.jpg"
import pier27 from "../src/assets/pier/IMG_2561.jpg"
import pier28 from "../src/assets/pier/IMG_2562.jpg"
import pier29 from "../src/assets/pier/IMG_2563.jpg"
import pier30 from "../src/assets/pier/IMG_2564.jpg"
import pier31 from "../src/assets/pier/IMG_2570.jpg"
import pier32 from "../src/assets/pier/IMG_2571.jpg"
import pier33 from "../src/assets/pier/IMG_2573.jpg"
import pier34 from "../src/assets/pier/IMG_2576.jpg"
import pier35 from "../src/assets/pier/IMG_2577.jpg"
import pier36 from "../src/assets/pier/IMG_2578.jpg"
import pier37 from "../src/assets/pier/IMG_2581.jpg"
import pier38 from "../src/assets/pier/IMG_2583.jpg"
import pier39 from "../src/assets/pier/IMG_2590.jpg"
import pier40 from "../src/assets/pier/IMG_2591.jpg"
import pier41 from "../src/assets/pier/IMG_2592.jpg"
import pier42 from "../src/assets/pier/IMG_2594.jpg"



import miri1 from "../src/assets/Miri ParkCity Everly Hotel/ParkCity Hotel Miri (main).jpeg"
import miri2 from "../src/assets/Miri ParkCity Everly Hotel/PC Hotel Miri 2.jpeg"
import miri3 from "../src/assets/Miri ParkCity Everly Hotel/PC Hotel Miri .jpeg"


import marina1 from "../src/assets/Marina yacht club miri/Marina Yacht Club 2 (main).jpeg"
import marina2 from "../src/assets/Marina yacht club miri/Yacht Club Miri.jpeg"
import marina3 from "../src/assets/Marina yacht club miri/Marina_Bay_Miri.jpg"
import marina4 from "../src/assets/Marina yacht club miri/Marina Yacht Club Miri.jpeg"
import marina5 from "../src/assets/Marina yacht club miri/Marina Yacht Club .jpeg"
import marina6 from "../src/assets/Marina yacht club miri/1280px-Boats_at_Marina_Bay,_Miri,_Sarawak.jpg"
import marina7 from "../src/assets/Marina yacht club miri/1i61o2215bfnd9l0w1576_W_400_0_R5_Q90.jpg"

import ghs1 from "../src/assets/Greens Hotel & Suites/98359922 (main).jpg"
import ghs2 from "../src/assets/Greens Hotel & Suites/unnamed-6.webp"
import ghs3 from "../src/assets/Greens Hotel & Suites/unnamed-4.webp"
import ghs4 from "../src/assets/Greens Hotel & Suites/unnamed-3.webp"
import ghs5 from "../src/assets/Greens Hotel & Suites/unnamed-2.webp"
import ghs6 from "../src/assets/Greens Hotel & Suites/unnamed-1.webp"
import ghs7 from "../src/assets/Greens Hotel & Suites/100710869.jpg"
import ghs8 from "../src/assets/Greens Hotel & Suites/1579075_17051516250052996106.jpg"
import ghs9 from "../src/assets/Greens Hotel & Suites/1579075_17051516200052996017.jpg"
import ghs10 from "../src/assets/Greens Hotel & Suites/1579075_16101013380047578156.jpg"
import ghs11 from "../src/assets/Greens Hotel & Suites/1579075_16101013350047578083.jpg"
import ghs12 from "../src/assets/Greens Hotel & Suites/1579075_16101013350047578077.jpg"
import ghs13 from "../src/assets/Greens Hotel & Suites/15717fa9990a6557e87a81166e8a8f0b.jpeg"
import ghs14 from "../src/assets/Greens Hotel & Suites/035b72fab01d3811fa4081ece4929105.jpeg"


import evgc1 from "../src/assets/Eastwood Valley Golf Club/Eastwood (main).webp"
import evgc2 from "../src/assets/Eastwood Valley Golf Club/unnamed.webp"
import evgc3 from "../src/assets/Eastwood Valley Golf Club/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (2).jpeg"
import evgc4 from "../src/assets/Eastwood Valley Golf Club/Lobby 3.png"
import evgc5 from "../src/assets/Eastwood Valley Golf Club/HMS-2021-GA V1_edited.jpg"
import evgc6 from "../src/assets/Eastwood Valley Golf Club/download.webp"
import evgc7 from "../src/assets/Eastwood Valley Golf Club/88981441.jpg"
import evgc8 from "../src/assets/Eastwood Valley Golf Club/2290059.jpg"
import evgc9 from "../src/assets/Eastwood Valley Golf Club/169070_15082513060034999108.jpg"
import evgc10 from "../src/assets/Eastwood Valley Golf Club/169070_15082513060034999107.jpg"
import evgc11 from "../src/assets/Eastwood Valley Golf Club/105.jpg"
import evgc12 from "../src/assets/Eastwood Valley Golf Club/69f805368c7827aecedae7db94439a0b.jpeg"
import evgc13 from "../src/assets/Eastwood Valley Golf Club/53ba984a474dbb0513bc5dd31af40042.jpeg"
import evgc14 from "../src/assets/Eastwood Valley Golf Club/_MG_9979_JPG.jpg"

import coco1 from "../src/assets/Coco Cabana/Coco Cabana/discover-miri-sarawak-malaysia-1920x1080 (main).jpg"
import coco2 from "../src/assets/Coco Cabana/Coco Cabana/k3iv8xe9ief31.jpg"
import coco3 from "../src/assets/Coco Cabana/Coco Cabana/FB_IMG_1746604825645.jpg"
import coco4 from "../src/assets/Coco Cabana/Coco Cabana/FB_IMG_1746604811107.jpg"
import coco5 from "../src/assets/Coco Cabana/Coco Cabana/FB_IMG_1746604811107.jpg"
import coco6 from "../src/assets/Coco Cabana/Coco Cabana/FB_IMG_1746604803257.jpg"
import coco7 from "../src/assets/Coco Cabana/Coco Cabana/FB_IMG_1746604795878.jpg"
// import coco8 from "../src/assets/Coco Cabana/Coco Cabana /FB_IMG_1746604815077.jpg"
import coco9 from "../src/assets/Coco Cabana/Coco Cabana/cococabana2.jpg"
import coco10 from "../src/assets/Coco Cabana/Coco Cabana/Coco Cabana Miri.jpeg"

import brigh1 from "../src/assets/Brighton Condominiums/ec59b3654959b0715099f0e05f3f0743 (main).jpg"
import brigh2 from "../src/assets/Brighton Condominiums/fe53779dcf39e44627d35736ad0b1cdb.jpg"
import brigh3 from "../src/assets/Brighton Condominiums/Brighton.webp"
import brigh4 from "../src/assets/Brighton Condominiums/98445da4e46d8559d5dcf390b672fa12.jpg"

//deploy

const pecImages = [
  pec1, pec2, pec3, pec4, pec5,
  pec6, pec7, pec8, pec9, pec10,
  pec11, pec12,pec13, pec14, pec15,
  pec16, pec17, pec19, pec20,
  pec21, pec22, pec23, pec24, pec25,
  pec26, pec27, pec28, pec30,
  pec31, pec32, pec33, pec35
];


const mlcImages = [mlc1, mlc2, mlc3, mlc4,mlc5, mlc6, mlc7,mlc8, mlc9, mlc10, mlc11, mlc12, mlc13, mlc14];

const csmImages = [
  csm1, csm2, csm3, csm4, csm5, csm6, csm7, csm8, csm9, csm10,
  csm11, csm12, csm13, csm14, csm15, csm16, csm17, csm18, csm19, csm20,
  csm21, csm22, csm24, csm25, csm26, csm27, csm28, csm29, csm32
];

const sbImages = [
  sb1, sb2, sb3, sb4,sb5, sb6, sb7, sb8, sb9,
  sb10, sb11, sb13, sb14, sb15, sb16, sb17, sb18
];
const bwImages = [
  bw1, bw2, bw3, bw4 ,bw5 ,bw6
];
const bwpImages = [
  bwp1,bwp2, bwp3,
  bwp6, bwp7, bwp8, bwp9,
  bwp12, bwp13, bwp14, bwp15
];

const bbtImages = [
  bbt1,bbt2,bbt3
]

const pierImages = [
  pier1, pier2, pier3, pier4, pier5, pier6,pier7,
  pier8, pier9, pier10, pier11, pier12,pier13,pier14,pier15,pier16,pier17,pier18,pier19,pier20,
  pier21,pier22,pier23,pier24,pier25,pier26,pier27,pier28,pier29,pier30,pier31,pier32,pier33,pier34,
  pier35,pier36,pier37,pier38,pier39,pier40,pier41,pier42
]

const miriImages = [
  miri1,miri2,miri3
]

const marinaImages = [
  marina1,marina2,marina3,marina4,marina5,marina6,marina7
]

const ghsImages = [
  ghs1,ghs2,ghs3,ghs4,ghs5,ghs6,ghs7,ghs8,ghs9,ghs10,ghs11,ghs12,ghs13,ghs14
]

const evgcImages = [
  evgc1,evgc2,evgc3,evgc4,evgc5,evgc6,evgc7,evgc8,evgc9,evgc10,evgc11,evgc12,evgc13,evgc14
]

const cocoImages = [
  coco1,coco2,coco3,coco4,coco5,coco6,coco7,coco9,coco10
]

const brighImages = [
  brigh1,brigh2,brigh3,brigh4
]
// Use more accurate typing
const images: Record<string, string[]> = {
  'Bintulu Commerce Square Mall': csmImages,
  'Bintulu Waterfront Hotel': bwImages,
  'Miri Marina Land Reclamation': mlcImages,
  'The Spring Bintulu': sbImages,
  'Bintulu Waterfront Promenade': bwpImages,
  'Bintulu Parkcity Everly Hotel': pecImages,
  'Bintulu 1-Malaysia Bus Terminal': bbtImages,
  'Pier 99': pierImages,
  'Miri ParkCity Everly Hotel':miriImages,
  'Marina Yacht Club Miri': marinaImages,
  'Greens Hotel & Suites': ghsImages,
  'Eastwood Valley Golf Club': evgcImages,
  'Coco Cabana': cocoImages,
  'Brighton Condominiums': brighImages
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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-11/12 md:w-2/3 lg:w-1/2 bg-white rounded-2xl shadow-lg p-6 overflow-visible"> {/* ✅ overflow-visible */}
            <button
              style={{ top: '-15px', right: '-15px' }}
              className="absolute -top-5 -right-5 bg-white border border-gray-300 rounded-full p-2 shadow-xl hover:bg-gray-100 transition z-50"
              onClick={() => setShowCarousel(false)}
              aria-label="Close"
            >
              <XMarkIcon className="w-5 h-5 text-gray-700" />
            </button>
            {/* Carousel */}
            <Slider {...settings}>
              {images[activeCategory].map((src, idx) => (
                <div key={idx}>
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[400px] object-cover rounded-xl"
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
