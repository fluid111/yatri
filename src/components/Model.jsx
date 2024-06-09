import React, { useState } from 'react';

const Model = () => {
  const [currentModel, setCurrentModel] = useState(0); // 0 for Project 1, 1 for Project 2
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
    <div className="flex flex-col items-center">
      <div className="bike_name flex justify-between w-full px-4 py-2">
        {/* Buttons */}
        <div className="flex">
          <button
            onClick={() => changeModel('prev')}
            className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &larr;
          </button>
          <button
            onClick={() => changeModel('next')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &rarr;
          </button>
        </div>
        <div>MODELS</div>
      </div>

      <div className="bike relative">
        {currentModel === 0 && (
          <div className="project_zero">
            <img src="/images/Pzero/Pzero_side.png" alt="Project 1" />
          </div>
        )}
        {currentModel === 1 && (
          <div className="project_one">
            <img src="/images/Pzero/Pzero_side-1.png" alt="Project 2" />
          </div>
        )}
        <button
          onClick={toggleDescription}
          className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>

      {isDescriptionVisible && (
        <div className="slider bg-gray-200 p-4 mt-4 rounded">
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
      )}
      <div className="touchpad bg-black">
        {/* touch screen for bike selection */}
<img src="/images/Pzero/Pzero_top11.png" alt="Project 2" />
      </div>
    </div>
  );
};

export default Model;