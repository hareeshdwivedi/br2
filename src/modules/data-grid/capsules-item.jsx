import React from 'react';

const Capsules = ({ data }) => {
  return (
    <div
      data-testid='dataGrid'
      className='w-full shadow-custom bg-[#1D2635] hover:bg-gray-800 md:hover:scale-105 hover:scale-100 transition-all ease-in duration-300 cursor-pointer  rounded-2xl p-12 flex flex-col justify-center items-center'
    >
      <div className='mb-8'>
        <img
          className='object-center object-cover rounded-full h-36 w-36'
          src={data.photoUrl}
          alt='photo'
        />
      </div>
      <div className='text-center'>
        <p className='text-xl text-gray-500 font-bold mb-2'>
          {data.capsule_serial}
        </p>
        <p className='text-base text-gray-200 font-normal'>{data.type}</p>
      </div>
    </div>
  );
};

export default Capsules;
