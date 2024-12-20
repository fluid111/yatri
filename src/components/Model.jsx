import React, { useState } from 'react';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';
import { LuPlus } from "react-icons/lu";
import './animations.css';

const Model = ({toggle, setToggle}) => {
  const [currentModel, setCurrentModel] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const changeModel = (direction) => {
    if (direction === 'next') {
      setCurrentModel(currentModel === 0 ? 1 : 0);
    } else {
      setCurrentModel(currentModel === 1 ? 0 : 1);
    }
  };

  return (
    <div className="relative">
      <div className="bike relative h-screen">
        {currentModel === 0 && (
          <div className={`project_zero relative h-full
            ${toggle ? 'hidden md:hidden' : ''}`
            }>
            <img src="/images/Pzero/Pzero_side.png" alt="Project zero" className="md:w-full md:h-full md:object-cover object-cover" />
            <div className="absolute inset-0 flex-col justify-center w-full h-full">
              <div className="text-white text-center md:text-4xl text-xl md:h-[200px] h-[40px] md:pt-[25px] pt:[5px] font-heebo font-bold mb-4">PROJECT ZERO</div>
              <div className="flex w-full items-left">

                <button
                  onClick={() => changeModel('prev')}
                  className="mr-2 bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 md:px-4 pl-[2px] rounded"
                >
                  <RiArrowLeftWideFill className="text-buttons bg-transparent md:size-[40px] size-[30px]" />
                </button>

                <button
                  onClick={() => changeModel('next')}
                  className="bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 md:px-4 rounded"
                >
                  <RiArrowRightWideFill className="text-buttons bg-transparent md:size-[40px] size-[30px]" />
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
                  <a href="#"
                    className="inline-block font-heebo mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
        {currentModel === 1 && (
          <div className={`project_one relative h-full
            ${toggle ? 'hidden md:hidden' : ''}`
            }>
            <img src="/images/Pzero/Pzero_side-1.png" alt="Project one" className="md:w-full md:h-full md:object-cover object-cover" />
            <div className="absolute inset-0 flex-col justify-center w-full h-full items-center">
              <div className="text-gray-300 text-center md:text-4xl text-xl md:h-[200px] h-[40px] md:pt-[25px] pt:[5px] font-heebo font-bold mb-4">PROJECT ONE</div>
              <div className="flex w-full items-left">
                <button
                  onClick={() => changeModel('prev')}
                  className="mr-2 bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 md:px-4 pl-[2px] rounded"
                >
                  <RiArrowLeftWideFill className="text-buttons bg-transparent md:size-[40px] size-[30px]" />
                </button>
                
                <button
                  onClick={() => changeModel('next')}
                  className="bg-transparent hover:bg-neutral-800 text-gray-800 font-bold py-2 md:px-4  rounded"
                >
                  <RiArrowRightWideFill className="text-buttons bg-transparent md:size-[40px] size-[30px]" />
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
        <div className=''>
          {/* This is + button */}
        <button
          onClick={toggleDescription}
          className="absolute  md:top-[300px] opacity-50 top-[102px] md:left-[44px] left-[13px] bg-buttons hover:opacity-80 text-white font-bold py-2 px-4 rounded-[30px] md:rounded-[50px]"
        >
          <LuPlus className='md:w-[30px] w-[15px] md:h-[40px] h-[15px]'/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Model;