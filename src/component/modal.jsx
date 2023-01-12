import moment from 'moment/moment';
import React from 'react';
import { useGlobalContext } from '../context/AppProvider';
import {
  checkBackgroundColor,
  dataStyle,
  labelContainer,
  titleStyle,
} from '../utils/misc';

const Modal = ({ restOfTheData }) => {
  const { toggle } = useGlobalContext();

  return (
    <>
      <div
        className='py-12 bg-black bg-opacity-30  inset-0  fixed transition duration-150 ease-in-out z-10 flex flex-col justify-center '
        id='modal'
      >
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 rounded  shadow-md max-w-2xl bg-[#1D2635]'
        >
          <div className='w-full flex justify-end  pr-4 pt-4 text-lg'>
            <span
              className='flex cursor-pointer justify-center rounded-full bg-gray-700 w-8 h-8'
              onClick={() => {
                toggle();
              }}
            >
              x
            </span>
          </div>
          <div className='relative p-5    border-gray-400'>
            <div className='grid lg:grid-cols-2  grid-cols-1 mx-auto gap-5'>
              <div>
                <img
                  className='rounded-lg h-56 lg:h-72 bg-cover w-full'
                  src={restOfTheData.photoUrl}
                  alt='photo'
                />
              </div>
              <div>
                {restOfTheData.details && (
                  <div className='p-4 rounded-md border-2 border-yellow-300  text-yellow-300'>
                    {restOfTheData.details}
                  </div>
                )}
                <section className='flex flex-col gap-3 mt-5 text-gray-300'>
                  <div className={labelContainer}>
                    <p className={titleStyle}>capsule ID</p>
                    <p className={dataStyle}>{restOfTheData.capsule_id}</p>
                  </div>
                  <div className={labelContainer}>
                    <p className={titleStyle}>Landings</p>
                    <p className={dataStyle}>{restOfTheData.landings}</p>
                  </div>
                  <div className={labelContainer}>
                    <p className={titleStyle}>Missions</p>
                    <p className={dataStyle}>
                      {restOfTheData.missions
                        .map((item) => item.name)
                        .join(', ')}
                    </p>
                  </div>
                  {restOfTheData.original_launch && (
                    <div className={labelContainer}>
                      <p className={titleStyle}>Original Launch</p>
                      <p className={dataStyle}>
                        {moment(restOfTheData.original_launch).format('LL')}
                      </p>
                    </div>
                  )}
                  <div className={labelContainer}>
                    <p className={titleStyle}>status</p>
                    <p
                      style={{
                        backgroundColor: checkBackgroundColor(
                          restOfTheData.status
                        ),
                        padding: '2px 7px',
                        borderRadius: '5px',
                        textTransform: 'capitalize',
                        color: 'black',
                      }}
                      className={dataStyle}
                    >
                      {restOfTheData.status}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
