import React from 'react';

const Pagination = ({ prevPage, data, handlePage, nextPage, page }) => {
  return (
    <div className='flex justify-center flex-wrap'>
      <button
        className='bg-transparent text-white border-none font-bold capitalize m-[0.5rem] text-[1rem] cursor-pointer'
        onClick={prevPage}
      >
        prev
      </button>
      {data.map((item, index) => {
        return (
          <button
            key={index}
            className={`w-[2rem] h-[2rem] bg-slate-500 border-none rounded cursor-pointer m-[0.2rem] transition-all ${
              index === page ? `bg-slate-800 text-white` : null
            }`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        className='bg-transparent border-none text-white font-bold capitalize m-[0.5rem] text-[1rem] cursor-pointer'
        onClick={nextPage}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
