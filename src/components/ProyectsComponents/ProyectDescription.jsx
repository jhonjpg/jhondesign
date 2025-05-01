import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ProyectDescription = () => {
  const [expanded, setExpanded] = useState(false);
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  const Proyect = t('proyect', { returnObjects: true });

  const filtered = Proyect.filter(pro =>
    pro.proyectName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hidden md:block absolute top-20 left-0 z-20">
      <span
        onClick={() => !expanded && setExpanded(true)}
        className={`bg-black text-white rounded-r-xl w-60 h-20 flex justify-center items-center transition-all duration-500 cursor-pointer ${
          expanded ? 'w-96 h-auto p-4 flex-col items-start' : ''
        }`}
      >
        {!expanded ?     <span className="flex items-center gap-2">
      Project Description
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    </span> : (
          <>



            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
              className="absolute top-2 scale-150 z-20 right-2 text-white text-xl font-bold hover:text-blue-400"
            >
              ×
            </button>
            
            <div className="relative w-full mb-6">
  <input
    type="text"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search a project..."
    className="w-full pl-10 outline-none border-2 border-gray-800 p-4 text-white bg-black rounded-lg"
  />
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
    </svg>
  </div>
</div>

            <ul className="space-y-8 m-0 w-full max-h-96 overflow-auto">
              {filtered.length > 0 ? (
                filtered.map((pro, i) => (
                  <li key={i} className="bg-white text-black p-2 rounded shadow">
                    <img src={pro.imagen} alt={pro.proyectName} className="w-full h-32 object-cover mb-2 rounded" />
                    <p className="font-bold">{pro.proyectName}</p>
                    <p className="text-sm">{pro.description}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-300 italic text-sm w-full text-center">No projects found with that name 🤷‍♂️</p>
              )}
            </ul>
          </>
        )}
      </span>
    </div>
  );
};
