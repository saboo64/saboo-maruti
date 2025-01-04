import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';
import Header from '../../components/header/Header';
import galleryData from '../../constants/galleryData';
import { Link } from 'react-router-dom';
// Import Font Awesome CSS in your JavaScript file
import '@fortawesome/fontawesome-free/css/all.css';

// const galleryData = [
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02877.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02883.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02905.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02911.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02912.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02920.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02923.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02929.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02951.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02953.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02955.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02958.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02983.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC02985.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03116.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03346.webp',
//   },
//   {
//     img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/moosarambagh+opening/DSC03351.webp',
//   },
// ];

function Gallery() {
  const data = galleryData;
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 12;
  const pageVisited = pageNumber * dataPerPage;
  const displayData = data
    .slice(pageVisited, pageVisited + dataPerPage)
    .slice(0, 12)
    .map((item, i) => <img src={item.img} key={i} alt={item.img} />);

  const pageCount = Math.ceil(data.length / dataPerPage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Showroom Images in Hyderabad | Maruti Suzuki Workshop
          Images
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Showroom Images in Hyderabad | Maruti Suzuki Workshop Images'
        />
        <meta
          name='description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa Dealer in Secunderabad & Hyderabad. View latest Showroom, Maruti new car & Workshop images of Saboo Maruti.'
        />
        <meta name='keywords' content='Maruti Suzuki Nexa Showrrom' />
        <meta name='author' content='Broaddcast' />
        <link rel='canonical' href='https://www.saboonexa.in/gallery' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop'
        />
        <meta
          property='og:description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates.'
        />
        <meta property='og:url' content='https://www.saboonexa.in/gallery/' />
        <meta property='og:site_name' content='Saboo Nexa RKS Motors Pvt Ltd' />
        <meta
          property='og:image'
          itemprop='image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpg'
        />
        <meta property='og:image:width' content='850' />
        <meta property='og:image:height' content='445' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/gallery/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Nexa Showroom in Hyderabad | Maruti Suzuki Nexa Workshop'
        />
        <meta
          property='twitter:description'
          content='Saboo Nexa authorized Maruti Suzuki Nexa dealer in Secunderabad & Hyderabad. Visit our website for latest showroom updates, New Maruti car images & car service updates.'
        />
        <meta
          name='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpgg'
        />
        <meta name='twitter:creator' content='@rksnexa' />
        <meta name='twitter:site' content='@rksnexa' />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Maruti-Suzuki-Nexa-Gallery-Banner.png'
        className='max-w-full w-full'
        alt='Gallery banner'
      />
      <div className='shadow sm:px-0 px-4' id='gallery'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Gallery
        </p>
      </div>
      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-3 gap-8 md:px-0 grid-cols-2 px-5'>
          {displayData}
        </div>
        <ReactPaginate
          previousLabel={<i className='fas fa-chevron-left'></i>}
          nextLabel={<i className='fas fa-chevron-right'></i>}
          pageCount={pageCount}
          onPageChange={handleChange}
          containerClassName={'flex justify-center mt-8'}
          previousLinkClassName={
            'px-3 py-1 rounded-full bg-blue-800 text-white mr-2 hover:bg-red-600'
          }
          nextLinkClassName={
            'px-3 py-1 rounded-full bg-blue-800 text-white ml-2 hover:bg-red-600'
          }
          breakClassName={
            'hidden md:block px-2 py-1 rounded-full bg-blue-800 text-white'
          }
          pageClassName={
            'hidden md:block px-2 py-1 rounded-full bg-blue-800 text-white mx-1'
          }
          activeClassName={'bg-red-500 text-white'}
          disabledClassName={'disabledPage'}
        />
      </div>
    </>
  );
}

export default Gallery;
