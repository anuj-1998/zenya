import React from 'react';
import { useNavigate } from 'react-router-dom';

import Residential from './assets/residential.jpeg';
import Commercial from './assets/commercial.jpeg';
import Government from './assets/government.jpeg';

type CardKey = 'Commercial' | 'Residential' | 'Government';

type CardInfo = {
  image: string;
  route: string;
};

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const cardData: Record<CardKey, CardInfo> = {
    Commercial: {
      image: Commercial,
      route: "/projects/commercial"
    },
    Residential: {
      image: Residential,
      route: "/projects/residential"
    },
    Government: {
      image: Government,
      route: "/projects/government"
    },
  };

  return (
    <section className="w-full py-10 px-4 bg-[#fff8f2]">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10 text-center tracking-tighter">
        Our Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cardData).map(([key, { image, route }]) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
            onClick={() => navigate(route)}
          >
            <img src={image} alt={key} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold">{key}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
