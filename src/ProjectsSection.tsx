import React, { useState } from 'react';
import Residential from '../src/assets/residential.jpeg';
import Commercial from '../src/assets/commercial.jpeg';
import Government from '../src/assets/government.jpeg';

type CardKey = 'Commercial' | 'Residential' | 'Government';

type CardInfo = {
  image: string;
  description?: string;
};

type ActiveCard = {
  title: CardKey;
} & CardInfo;

const ProjectsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<ActiveCard | null>(null);

  const cardData: Record<CardKey, CardInfo> = {
    Commercial: {
      image: Commercial,
      //description: 'EV Charging Stations, Automated Waste Collection',
    },
    Residential: {
      image: Residential,
     // description: 'Priceless View, Surrounded by Greenery, F&B with Lake Frontage',
    },
    Government: {
      image: Government,
     // description: 'Smart Community, Sustainable Development',
    },
  };

  return (
    <section className="w-full py-10 px-4 bg-[#fff8f2]">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tighter">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cardData).map(([key, value]) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
            onClick={() =>
              setActiveCard({ title: key as CardKey, ...value })
            }
          >
            <img src={value.image} alt={key} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 tracking-tighter">
                {key}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCard && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-1/2 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
              onClick={() => setActiveCard(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{activeCard.title}</h3>
            <img
              src={activeCard.image}
              alt={activeCard.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700">{activeCard.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
