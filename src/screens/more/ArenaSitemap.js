import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

const ArenaSitemap = () => {
  return (
    <>
      <Helmet>
        <title>
          Sitemap - Explore Our Vehicle Inventory and Services | Saboo RKS
        </title>
        <meta
          name='title'
          content='Sitemap - Explore Our Vehicle Inventory and Services | Saboo RKS'
        />
        <meta
          name='description'
          content='Navigate through our comprehensive sitemap to discover all the offerings at Saboo RKS. Explore our extensive range of new and used vehicles, financing options, service centers, and more. Find your way around effortlessly to locate the information you need about our dealership and the services we provide.'
        />
        {/* <meta
          name="keywords"
          content="alto on road price, alto offers, alto price, alto service center, maruti alto on road price, maruti alto offers, maruti alto price, maruti alto service center, maruti alto service center near me, maruti suzuki alto price, maruti suzuki alto on road price, maruti suzuki alto offers,maruti suzuki alto, alto on road price, alto 2022 offers, alto 2022 price, alto on road price in hyderabad, breza offers in hyderabad, alto price in hyderabad, maruti alto 2022 price, maruti alto 2022 on road price, maruti alto 2022 offers, maruti alto 2022 price in hyderabad, maruti alto 2022 on road price in hyderabad, Maruti Suzuki alto 2022 price, Maruti Suzuki alto 2022 on road price, maruti suzuki alto 2022 offers,  vitara alto offers, Vitara alto price, vitara alto on road price, vitara alto 2022 offers, vitara alto 2022 price, vitara alto 2022 on road price, vitara alto 2022 offers"
        /> */}
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboomaruti.in/maruti-alto-800-on-road-price-in-hyderabad'
        />
        <meta
          property='og:title'
          content='Sitemap - Explore Our Vehicle Inventory and Services | Saboo RKS'
        />
        <meta
          property='og:description'
          content='Navigate through our comprehensive sitemap to discover all the offerings at Saboo RKS. Explore our extensive range of new and used vehicles, financing options, service centers, and more. Find your way around effortlessly to locate the information you need about our dealership and the services we provide.'
        />
        <meta property='og:image' content='img/og-tags/alto.webp' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://x.com/saboorksmaruti'
        />
        <meta
          property='twitter:title'
          content='Sitemap - Explore Our Vehicle Inventory and Services | Saboo RKS'
        />
        <meta
          property='twitter:description'
          content='Navigate through our comprehensive sitemap to discover all the offerings at Saboo RKS. Explore our extensive range of new and used vehicles, financing options, service centers, and more. Find your way around effortlessly to locate the information you need about our dealership and the services we provide.'
        />
        <meta property='twitter:image' content='img/og-tags/alto.webp' />
      </Helmet>
      <nav class='py-2 md:py-4 bg-blue-800'>
        <div class='container px-2 mx-auto md:flex md:items-center'>
          <div class='flex justify-between items-center'>
            <a href='/' class='font-bold text-xl text-white-600'>
              {' '}
              <img
                className='h-12 w-auto'
                src={require('../../assets/whitelogo.webp')}
                alt='logo'
              />
            </a>
            {/* <button
                class='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i class='fas fa-bars'></i>
              </button> */}
          </div>

          <div
            class='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
            id='navbar-collapse'
          >
            <a
              href='/'
              class='p-2 lg:px-4 md:mx-2 text-3xl text-white font-bold rounded'
            >
              Sitemap
            </a>
          </div>
        </div>
      </nav>
      <div className='container mx-auto '>
        <div className='text-6xl font-bold mt-6 text-blue-800'>Sitemap</div>

        <div class='flex flex-wrap mt-6 w-full text-blue-800'>
          {/* Global */}
          <div className='text-3xl mt-4 font-semibold'>Global</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <a href='/' class=' hover:underline'>
                Home
              </a>
            </li>
            <li class='w-full md:w-1/4'>
              <a href='/maruti-suzuki-car-offers-page' class=' hover:underline'>
                Offers
              </a>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-car-service-centers-near-me'
                class=' hover:underline'
              >
                Book A Service
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-new-cars' class=' hover:underline'>
                Arena Cars
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-cng-cars' class=' hover:underline'>
                CNG Cars
              </HashLink>
            </li>
          </ul>{' '}
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink to='/maruti-suzuki-tour-cars' class='hover:underline'>
                Tour Cars
              </HashLink>
            </li>

            <li class='w-full md:w-1/4'>
              <HashLink to='/#testimonials' class=' hover:underline'>
                Testimonials
              </HashLink>
            </li>

            <li class='w-full md:w-1/4'>
              <HashLink
                to='/contact-maruti-suzuki-showroom'
                class=' hover:underline'
              >
                Contact Us
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink to='/blog' class=' hover:underline'>
                Blog
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink to='#outlets' class=' hover:underline'>
                Outlets
              </HashLink>
            </li>
          </ul>
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>
        {/* cars */}
        <div class='flex flex-wrap  w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>Cars</div>
          <ul class='mt-4 flex flex-row justify-between w-full text-2xl'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Alto 800
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Alto K10
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Wagon R
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Swift
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/the-all-new-celerio' class=' hover:underline '>
                Celerio
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#overview'
                class='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* specifications */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#specs'
                class='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#pricetable'
                class='hover:underline '
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
          </ul>
          {/* vehicle enquiry */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-on-road-price-in-hyderabad#enquiry'
                class='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/all-new-maruti-alto-k10-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagon-r-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-car-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/the-all-new-celerio#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
          </ul>
          {/* cng */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-800-cng-on-road-price-in-hyderabad'
                class='hover:underline '
              >
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/alto-k10-cng' class=' hover:underline'>
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagonr-cng-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/maruti-new-swift-cng' class=' hover:underline'>
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-celerio-cng-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
          </ul>
          {/* cars 2nd section */}
          <ul class='mt-4 flex flex-row justify-between w-full text-2xl'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Dzire
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                S-Presso
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Ertiga
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Brezza
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Eeco
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#overview'
                class='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* specifications */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#specs'
                class='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#pricetable'
                class='hover:underline '
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-on-road-price-in-hyderabad#pricetable'
                class=' hover:underline'
              >
                Price Table
              </HashLink>
            </li>
          </ul>
          {/* vehicle enquiry */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-swift-dzire-on-road-price-in-hyderabad#enquiry'
                class='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-new-brezza-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <Link
                to='/maruti-eeco-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </Link>
            </li>
          </ul>
          {/* cng */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink to='/maruti-new-swift-cng' class='hover:underline '>
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-s-presso-cng-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-cng-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-brezza-cng-on-road-price'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-cng-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                CNG
              </HashLink>
            </li>
          </ul>
          {/* tour vehicles */}
          <ul class='mt-4 flex flex-row justify-between w-full text-2xl'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Tour H1
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Tour S
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Tour H3
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
                class=' hover:underline'
              >
                Tour M
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad'
                class=' hover:underline '
              >
                Tour V
              </HashLink>
            </li>
          </ul>{' '}
          {/* overview */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#overview'
                class='hover:underline '
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#overview'
                class=' hover:underline'
              >
                Overview
              </HashLink>
            </li>
          </ul>
          {/* enquiry */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#enquiry'
                class='hover:underline '
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#enquiry'
                class=' hover:underline'
              >
                Enquiry
              </HashLink>
            </li>
          </ul>
          {/* price table */}
          <ul class='mt-4 flex flex-row justify-between w-full font-light'>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-alto-tour-h1-on-road-price-in-hyderabad#specs'
                class='hover:underline '
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-dzire-tour-s-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-ertiga-tour-m-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-eeco-tour-v-on-road-price-in-hyderabad#specs'
                class=' hover:underline'
              >
                Specifications
              </HashLink>
            </li>
          </ul>
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>

        <div class='flex flex-wrap  w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>About Us</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/about-maruti-suzuki-dealers#about'
                class=' hover:underline'
              >
                About Saboo RKS
              </HashLink>
            </li>
            <li class='w-full md:w-2/2'>
              <HashLink
                to='/about-maruti-suzuki-dealers#team'
                class=' hover:underline'
              >
                Management
              </HashLink>
            </li>
          </ul>{' '}
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>

        <div class='flex flex-wrap  w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>Driving School</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-driving-school'
                class=' hover:underline'
              >
                Courses
              </HashLink>
            </li>
            <li class='w-full md:w-2/2'>
              <HashLink
                to='/maruti-suzuki-driving-school#dsenquiry'
                class=' hover:underline'
              >
                Driving School Enquiry
              </HashLink>
            </li>
          </ul>{' '}
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>

        <div class='flex flex-wrap mt-6 w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>Services</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink to='/payment#payments' class=' hover:underline'>
                Payments
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-insurance-renewal#insurance'
                class=' hover:underline'
              >
                Insurance
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-finance-services#finance'
                class=' hover:underline'
              >
                Finance
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/corporate#corporate' class=' hover:underline'>
                Corporate
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/subscribe' class=' hover:underline'>
                Subscription
              </HashLink>
            </li>
          </ul>{' '}
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>

        <div class='flex flex-wrap mt-6 w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>Outlets</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink to='/showrooms#showrooms' class=' hover:underline'>
                Arena
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/true-value' class=' hover:underline'>
                Truevalue
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-suzuki-car-service-center#workshop'
                class=' hover:underline'
              >
                Workshop
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-driving-school-locations'
                class=' hover:underline'
              >
                Driving School
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink
                to='/maruti-driving-school-locations'
                class=' hover:underline'
              >
                Driving School
              </HashLink>
            </li>
          </ul>{' '}
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>

        <div class='flex flex-wrap  w-full text-blue-800'>
          <div className='text-3xl mt-4 font-semibold'>More</div>
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <a
                href='https://www.spatial.io/s/Saboo-Arena-Showroom-62f498277e22f400016f8be8?share=2230171934612064401'
                class=' hover:underline'
              >
                Metaverse
              </a>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/compare-cars#compare' class=' hover:underline'>
                Compare
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink
                to='/maruti-genuine-accessories#accessories'
                class=' hover:underline'
              >
                Accessories
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/gallery#gallery' class=' hover:underline'>
                Gallery
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/blog#blog' class=' hover:underline'>
                Blog
              </HashLink>
            </li>
          </ul>{' '}
          <ul class='mt-4 flex flex-row justify-between w-full '>
            <li class='w-full md:w-1/4'>
              <HashLink to='/awards#awards' class='hover:underline'>
                Awards
              </HashLink>
            </li>
            <li class='w-full md:w-1/4'>
              <HashLink to='/careers#careers' class=' hover:underline'>
                Careers
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink to='/' class=' hover:underline'>
                Ertiga
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink to='/' class=' hover:underline'>
                Brezza
              </HashLink>
            </li>
            <li class='w-full md:w-1/4 invisible'>
              <HashLink to='/' class=' hover:underline'>
                Eeco
              </HashLink>
            </li>
          </ul>
          <p className='h-px my-6 w-full bg-blue-800'></p>
        </div>
      </div>
    </>
  );
};

export default ArenaSitemap;
