import React, { useState } from 'react';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';
import './animations.css';

const Model = () => {
  const [currentModel, setCurrentModel] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const changeModel = (direction) => {
    if (direction === 'next') {
      setCurrentModel(currentModel === 0 ? 1 : 0);
    } else {
      setCurrentModel(currentModel === 0 ? 1 : 0);
    }
  };

  return (
    <div className="relative">
      <div className="bike relative h-screen">
        {currentModel === 0 && (
          <div className="project_zero relative h-full">
            <img src="/images/Pzero/Pzero_side.jpg" alt="Project zero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="text-white text-center text-4xl font-bold mb-4">MODELS</div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => changeModel('prev')}
                  className="mr-2 bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  <RiArrowLeftWideFill className="text-buttons bg-transparent size-[40px]" />
                </button>
                <button
                  onClick={() => changeModel('next')}
                  className="bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  <RiArrowRightWideFill className="text-buttons bg-transparent size-[40px]" />
                </button>
              </div>
            </div>
            {isDescriptionVisible && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-gray-200 p-4 rounded slide-in-right">
                  <p>
                    This is a description of the current model. You can add more details
                    here.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
        {currentModel === 1 && (
          <div className="project_one relative h-full">
            <img src="/images/Pzero/Pzero_side-1.png" alt="Project one" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="text-white text-center text-4xl font-bold mb-4">MODELS</div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => changeModel('prev')}
                  className="mr-2 bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  <RiArrowLeftWideFill className="text-buttons bg-transparent size-[40px]" />
                </button>
                <button
                  onClick={() => changeModel('next')}
                  className="bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  <RiArrowRightWideFill className="text-buttons bg-transparent size-[40px]" />
                </button>
              </div>
            </div>
            {isDescriptionVisible && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-gray-200 p-4 rounded slide-in-right">
                  <p>
                    This is a description of the current model. You can add more details
                    here.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
        <button
          onClick={toggleDescription}
          className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Model;