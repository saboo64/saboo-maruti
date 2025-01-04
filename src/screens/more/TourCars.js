import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { tourProducts } from '../../constants';

function TourCars() {
  return (
    <>
      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/about/1920x400-Backdrop.webp'
        className='w-full lg:mt-20'
        alt='banner'
      />
      <p className='text-red-500 text-center text-2xl mt-4'>Maruti Tour Cars</p>
      <p className='text-sm text-center mb-4 px-5'>
        Our professional and well trained staff is ready to assist you.
      </p>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-5 pb-5'>
        {tourProducts.map((item, index) => (
          <div
            className='flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden'
            key={index}
          >
            <div className='flex-auto overflow-hidden'>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image h-[250px] lg:h-[310px] w-full object-cover'
                />
              </Link>
            </div>
            <div className='flex-auto bg-white'>
              <div>
                <div className='flex items-center justify-between p-5 '>
                  <img src={item.logo} alt={item.name} className='h-10' />
                  <div>
                    <p className='font-bold'>
                      {item.petrol}
                      <span className='font-light'>*</span>
                    </p>
                    <p className='font-light'>Petrol</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-3 pb-5'>
                  <Link
                    to={item.explore}
                    className='bg-blue-800 hover:bg-red-700 hover:border hover:text-white duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded-full'
                  >
                    Explore
                  </Link>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='border border-blue-800  hover:bg-red-700 hover:border-red-700 hover:text-white  duration-300 ease-in p-2 max-w-[44%] w-full text-center text-blue-800 text-sm uppercase rounded-full'
                  >
                    View Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TourCars;
