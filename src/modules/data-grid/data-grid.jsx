import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Button from '../../component/button';
import InputField from '../../component/inputField';
import Loading from '../../component/loading';
import Modal from '../../component/modal';
import Pagination from '../../component/pagination';
import { useGlobalContext } from '../../context/AppProvider';
import { useFetch } from '../../hooks/useFetch';
import usePagination from '../../hooks/usePagination';
import Capsules from './capsules-item';

const DataGrid = () => {
  const { loading, data } = useFetch();

  const { prevPage, nextPage, handlePage, item, page } = usePagination();
  const { isShowing, toggle } = useGlobalContext();

  const [restOfTheData, setRestOfTheData] = useState(null);
  const handleRestOfTheData = (data) => {
    setRestOfTheData(data);
  };
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <section id='grid' className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='text-center pb-6'>
            <h2 className='text-base font-bold w-[100%] mb-2 mx-auto text-center lg:w-[45%] text-yellow-300'>
              Do you know Four astronauts returned to Earth in the SpaceX
              capsule after a nearly six-month mission on the International
              Space Station?
            </h2>

            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray-300'>
              Check out the latest SpaceX capsules here
            </h1>
          </div>
          <div className='gap-4 flex justify-end lg:flex-row flex-col  mt-6 mx-7'>
            <InputField />
            <div className=''>
              <Datepicker
                value={value}
                onChange={handleValueChange}
                showShortcuts={false}
              />
            </div>
            <Button />
          </div>
          <div className='grid grid-cols-1 m-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {item.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    toggle();
                    handleRestOfTheData(item);
                  }}
                >
                  <Capsules data={item} />
                </div>
              );
            })}
          </div>
          {!loading && (
            <Pagination
              prevPage={prevPage}
              data={data}
              handlePage={handlePage}
              nextPage={nextPage}
              page={page}
            />
          )}
        </>
      )}

      {isShowing ? <Modal restOfTheData={restOfTheData} /> : null}
    </section>
  );
};

export default DataGrid;
