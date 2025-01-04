import React from "react";
import Slider from "../../components/home/Slider";
import CarEnquiry from "../../components/home/CarEnquiry";
import MobileSlider from "../../components/home/MobileSlider";
import Cars from "../../components/home/Cars";
// import About from '../../components/home/About';
// import Accomplishments from '../../components/home/Accomplishments';
import { FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//confetti
// import Confetti from 'react-confetti';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
import { reviews } from "../../constants/carservice";
import Header from "../../components/header/Header";

import { Helmet } from "react-helmet";
import { WhyChooseUs } from "../../components/home/About";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki 2025 Discounts and festive Offers – Unbeatable 2025 Year
          offers on Your Favorite Maruti Cars at RKS Motor
        </title>
        <meta
          name="title"
          content="Maruti Suzuki 2025 Discounts and festive Offers – Unbeatable 2025 Year offers  on Your Favorite Maruti Cars at RKS Motor"
        />
        <meta
          name="description"
          content="Take advantage of Maruti Suzuki's 2025 Discounts and festive Offers! Get the best deals and discounts on popular models like Swift, Dzire, Vitara Brezza, and more. Whether you're looking for a fuel-efficient hatchback, a spacious sedan, or a powerful SUV, Maruti Suzuki has something for everyone. Hurry, limited-time offers on cash discounts, special finance schemes, and exchange bonuses await you."
        />
        <meta
          name="keywords"
          content="January-offers, 2025 Discounts and festive Offers,Maruti Suzuki year offers, 2025 car discounts, Maruti Suzuki deals, Maruti Suzuki car offers, Swift discount, Dzire offer, Vitara Brezza 2025 year sale, car exchange bonus, Maruti Suzuki limited-time deals, Maruti Suzuki finance offers ,2025 Discounts and festive Offers"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/black-logo.png"
        ></meta>
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Maruti Suzuki 2025 Discounts and festive Offers – Unbeatable Discounts on Your Favorite Cars at RKS Motor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:description"
          content="Saboo Maruti authorized Maruti Suzuki dealer in Hyderabad & Secunderabad. Get best deals & offers on new Maruti Celerio, Maruti Swift, Maruti brezza,Maruti S-Presso, Maruti Wagon R, Maruti Ertiga, Maruti Alto 800, Maruti Eeco, Maruti Omni, Maruti Vitara brezza."
        />
        <meta property="og:image" content="img/og-tags/saboo_rks.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki 2025 Discounts and festive Offers – Unbeatable Discounts on Your Favorite Cars at RKS Motor"
        />
        <meta
          property="twitter:description"
          content="Take advantage of Maruti Suzuki's 2025 Discounts and festive Offers! Get the best deals and discounts on popular models like Swift, Dzire, Vitara Brezza, and more. Whether you're looking for a fuel-efficient hatchback, a spacious sedan, or a powerful SUV, Maruti Suzuki has something for everyone. Hurry, limited-time offers on cash discounts, special finance schemes, and exchange bonuses await you."
        />
        <meta property="twitter:image" content="img/og-tags/saboo_rks.webp" />
        <meta
          name="facebook-domain-verification"
          content="md4mdsmejpjm33sfbb9akud4erg4k0"
        />
      </Helmet>

      <Header />
      {/* <Header2 /> */}
      <div className=" sm:hidden">
        <MobileSlider />
      </div>
      <div className="hidden sm:block">
        <Slider />
      </div>

      {/* <Slider /> */}
      {/* <Confetti /> */}
      {/* <MobileSlider /> */}

      <CarEnquiry />

      <Cars />
      {/* <About /> */}
      <WhyChooseUs />
      {/* <Accomplishments /> */}
      {/* <LocationsatHomePage /> */}
      <Blog />
      <Testimonials />
    </>
  );
}

// const LocationsatHomePage = () => {
//   return (
//     <>
//       <div className='container relative mx-auto mt-3'>
//         <div className='grid grid-cols-1 gap-4 m-3 bg-gray-100 md:grid-cols-2 rounded-2xl'>
//           <div className='flex flex-col col-span-1 gap-4 p-4 md:p-2'>
//             <div className='p-4 border-red-500 md-3 md:p-8'>
//               <div className='border-b-2 pb-4 text-4xl font-bold md:pb-8 md:text-6xl text-[#293e91]'>
//                 Locations
//               </div>
//               <p className='border-b-2 pb-4 mt-4 text-sm md:pb-8 md:text-lg text-[#293e91]'>
//                 Explore our showroom of quality vehicles, conveniently located
//                 in Hyderabad to serve you better on every journey.
//               </p>
//             </div>
//             <div className=''>
//               <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
//                 <div className='relative overflow-hidden rounded-2xl'>
//                   <a href='https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Malakpet,+Hyderabad)/@17.371254,78.512446,15z/data=!4m6!3m5!1s0x3bcb985a78a7f883:0xad5bb6113d36bffc!8m2!3d17.3712538!4d78.5124463!16s%2Fg%2F11bbrj30gb?hl=en&entry=ttu'>
//                     <img
//                       src='https://lh3.googleusercontent.com/p/AF1QipNy727I0UpGe1yIhQ67wPOoE_PF4LnNiNn8K32S=s1360-w1360-h1020'
//                       className='object-cover w-full h-64 transition-transform duration-200 transform md:h-full hover:scale-105'
//                     />
//                     <div className='absolute bottom-0 left-0 m-4 text-lg font-bold text-white'>
//                       Malakpet
//                     </div>
//                   </a>
//                 </div>
//                 <div className='relative overflow-hidden rounded-2xl'>
//                   <a href='https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Narsingi,+Hyderabad)/@17.3837654,78.3631478,15z/data=!4m6!3m5!1s0x3bcb958150dd4c01:0x2d0aecdb5b3523de!8m2!3d17.3837654!4d78.3631478!16s%2Fg%2F11v07h42w1?entry=ttu'>
//                     <img
//                       src='https://lh3.googleusercontent.com/p/AF1QipP0QArklxlSs_OhkZcF9a9boJuPTyqKmw6D2iah=s1360-w1360-h1020'
//                       className='object-cover w-full h-64 transition-transform duration-200 transform shadow-xl md:h-full hover:scale-105'
//                     />
//                     <div className='absolute bottom-0 left-0 m-4 text-lg font-bold text-white'>
//                       Narsingi
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='relative col-span-1 p-2'>
//             <a href='https://www.google.com/maps/place/Maruti+Suzuki+Arena+-+Saboo+RKS+Motor+Pvt.+Ltd/@17.4241643,78.4573371,15z/data=!4m2!3m1!1s0x0:0x1e0a3e3dabcb8701?sa=X&ved=2ahUKEwikovmhtNCEAxUGR2wGHSDqCIsQ_BJ6BAgTEAA'>
//               <img
//                 src='https://lh3.googleusercontent.com/p/AF1QipPPhdZg3FHrFoQHEjjWOkXbgwy0bV0CdArxl0Jj=s1360-w1360-h1020'
//                 className='object-cover w-full h-64 transition-transform duration-200 transform shadow-xl rounded-2xl md:h-full hover:scale-105'
//               />
//               <div className='absolute bottom-0 left-0 m-6 text-5xl font-bold text-white'>
//                 Somajiguda
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Blog = () => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl px-4 py-1 mx-auto lg:py-1 lg:px-2">
          <div className="max-w-screen-sm mx-auto mb-2 text-center lg:mb-16 ">
            <h2
              className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91]"
              x-intersect="$el.classList.add('tracking-in-expand')"
            >
              Our Blog
            </h2>
            <p
              className="max-w-2xl mx-auto mb-12 text-lg font-light text-gray-600"
              x-intersect="$el.classList.add('fade-in-bottom')"
            >
              Rev Up Your Knowledge: Explore Our Blog for Expert Tips, Trends,
              and Latest news!
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* <!-- article 1 --> */}
            <article className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md">
              <figure className="relative h-64 bg-gray-300">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.financialexpress.com/wp-content/uploads/2024/09/wagonr-waltz.jpg"
                  alt="Bonnie Green avatar"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <figcaption className="text-center text-white">
                    <h2 className="text-3xl font-light">
                      Maruti Suzuki WagonR Waltz Edition launched at Rs 5.64
                      lakh
                    </h2>
                    <p className="mt-2 text-sm">Financial Express</p>
                  </figcaption>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-6 h-6 text-yellow-100 top-2 left-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3a2 2 0 0 0-2 2v3.586L5.707 9.293a1 1 0 1 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0-1.414-1.414L11 8.586V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V3zM7 9.586V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.414l-3.5 3.5a1 1 0 0 1-1.414 0L7 9.586z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </figure>
              <div className="p-6 bg-white ">
                <div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <span className="text-xs font-medium">Article</span>
                    <span className="mx-2">•</span>
                    <time className="text-xs">Sep 20, 2024</time>
                  </div>
                  <p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600 ">
                    Maruti Suzuki, celebrating the success of the WagonR, has
                    launched the limited edition Waltz variant, priced at Rs
                    5.64 lakh onwards, ex-showroom. Over the years, Maruti
                    Suzuki has sold over 32.5 lakh units of the WagonR since its
                    launch.
                  </p>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.financialexpress.com/auto/car-news/maruti-suzuki-wagonr-waltz-edition-launched-at-rs-5-64-lakh/3616537/"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
              </div>
            </article>
            {/* <article className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md">
              <div className="relative h-64 bg-gray-300">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.siasat.com/wp-content/uploads/2023/05/Before-87.png"
                  alt="Bonnie Green avatar"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-light">
                      Hyderabad: 20 cars distributed under Driver Empowerment
                      Programme
                    </h2>
                    <p className="mt-2 text-sm">The Siasat Daily</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-6 h-6 text-yellow-100 top-2 left-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3a2 2 0 0 0-2 2v3.586L5.707 9.293a1 1 0 1 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0-1.414-1.414L11 8.586V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8 3a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V3zM7 9.586V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.414l-3.5 3.5a1 1 0 0 1-1.414 0L7 9.586z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 bg-white">
                <div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <span className="text-xs font-medium">Article</span>
                    <span className="mx-2">•</span>
                    <span className="text-xs">May 17, 2023</span>
                  </div>
                  <p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600">
                    As a part of the Driver Empowerment Programme, Telangana
                    State Minority Finance Corporation (TSMFC) distributed 20
                    Maruthi Suzuki cars to minority beneficiaries on Tuesday.
                  </p>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.siasat.com/hyderabad-20-distributed-under-driver-empowerment-programme-2591202/"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
              </div>
            </article> */}

            {/* <!-- article 2 --> */}
            <article className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md">
              <figure className="relative h-64 bg-gray-300">
                <img
                  className="object-cover w-full h-full"
                  src={require("../../assets/bye-bye-diesel.png")}
                  alt="Bye Bye Diesel ! Nitin Gadkari urges Auto Inc to move away
                      from diesel vehicle production"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <figcaption className="text-center text-gray-200">
                    <h2 className="text-3xl font-light">
                      Bye Bye Diesel ! Nitin Gadkari urges Auto Inc to move away
                      from diesel vehicle production
                    </h2>
                    <p className="mt-2 text-sm">ETAuto</p>
                  </figcaption>
                </div>
              </figure>
              <div className="flex flex-col justify-between p-6 bg-white">
                <div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <span className="text-xs font-medium">Article</span>
                    <span className="mx-2">•</span>
                    <time className="text-xs">Sep 12, 2023</time>
                  </div>
                  <p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600">
                    Union Minister of Road Transport and Highways, urged the
                    automobile industry to shift away from diesel sales and the
                    production of diesel vehicles, citing it as a hazardous
                    fuel.
                  </p>
                </div>

                <div className="flex justify-center ">
                  <a
                    href="https://auto.economictimes.indiatimes.com/news/industry/bye-bye-diesel-nitin-gadkari-urges-auto-inc-to-move-away-from-diesel-production-else-face-10-extra-gst/103599761"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
              </div>
            </article>

            {/* <!-- article 3 --> */}
            <article className="relative overflow-hidden border border-gray-200 rounded-lg shadow-md">
              <figure className="relative h-64 bg-gray-300">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.financialexpress.com/wp-content/uploads/2024/09/Maruti-Swift-CNG.jpg"
                  alt="The Hindu"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <figcaption className="text-center text-gray-100">
                    <h2 className="text-3xl font-light">
                      Maruti Suzuki Swift CNG launched at Rs 8.20 lakh: Price,
                      Mileage
                    </h2>
                    <p className="mt-2 text-sm">Express Drives Desk</p>
                  </figcaption>
                </div>
              </figure>
              <div className="flex flex-col justify-between p-6 bg-white">
                <div>
                  <div className="flex items-center mb-4 text-gray-500">
                    <span className="text-xs font-medium">Article</span>
                    <span className="mx-2">•</span>
                    <time className="text-xs">Sep 12, 2024</time>
                  </div>
                  <p className="max-w-2xl mx-auto mb-6 text-lg font-light text-gray-600">
                    Since its debut in May, the 2024 Maruti Suzuki Swift has
                    consistently ranked in the top three, except for August. To
                    maintain this momentum, the Indian automaker introduced the
                    Swift CNG,
                    {/* with prices starting at Rs 8.20 lakh,
                    ex-showroom. */}
                  </p>
                </div>

                <br />
                <div className="flex justify-center">
                  <a
                    href="https://www.financialexpress.com/auto/car-news/maruti-suzuki-swift-cng-launched-at-rs-8-20-lakh-price-mileage/3609103/"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-800 transition duration-300 ease-out border-2 border-blue-800 rounded-full shadow-md group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-blue-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Read More
                    </span>
                    <span className="relative invisible">Read More</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonials = () => {
  return (
    // <section
    //   className='flex items-center justify-center py-20 bg-white min-w-screen tails-selected-element'
    //   contenteditable='true'
    // >
    //   <div className='px-16 bg-white'>
    //     <div className='container flex flex-col items-start mx-auto lg:items-center'>
    //       <p
    //         className='relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-gray-500 uppercase lg:justify-center lg:items-center'
    //         data-primary='purple-500'
    //       >
    //         Don't just take our word for it
    //       </p>

    //       <h2 className='relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-[#293e91]'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='currentColor'
    //           className='absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block'
    //           viewBox='0 0 975.036 975.036'
    //         >
    //           <path
    //             d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'
    //             className=''
    //           ></path>
    //         </svg>
    //         See what others are saying
    //       </h2>
    //       <div
    //         className='block w-full h-0.5 max-w-lg mt-6 bg-blue-100 rounded-full'
    //         data-primary='purple-600'
    //       ></div>

    //       <div className='items-center justify-center w-full mt-12 mb-4 lg:flex'>
    //         <div className='flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0'>
    //           <div className='flex items-center justify-center'>
    //             <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?w=1800&t=st=1709009205~exp=1709009805~hmac=e33e8852ba20c7cc42a18e39554d4fe73af8435dd124bcd383e526e67856617c'
    //                 className='object-cover w-full h-full'
    //                 alt='review-1'
    //               />
    //             </div>
    //             <div className='flex flex-col items-start justify-center'>
    //               <h4 className='font-bold text-[#293e91] text-xl'>Vijay</h4>
    //               <p className='text-sm text-gray-500'>Engineer</p>
    //             </div>
    //           </div>
    //           <blockquote className='mt-8 italic text-gray-500 text-md'>
    //             "Wonderfull experinece with staff and Mr Prasad Induri has been
    //             very good in througout the process. Delivered as promised. Thank
    //             you RKS"
    //           </blockquote>
    //         </div>
    //         <div className='flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200'>
    //           <div className='flex items-center justify-center'>
    //             <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/arab-man-with-beard-standing-bricks-wall-background-with-happy-cool-smile-face-lucky-person_839833-31933.jpg?w=1800&t=st=1709009424~exp=1709010024~hmac=7855a6e03e1e53e9542bb5f9d739d731a956a4207c2ba177289337d0e149178e'
    //                 className='object-cover w-full h-full'
    //                 alt='testimonial-profile-person-2'
    //               />
    //             </div>
    //             <div className='flex flex-col items-start justify-center'>
    //               <h4 className='font-bold text-[#293e91] text-xl'>Mohan Reddy</h4>
    //               <p className='text-sm text-gray-500'>Doctor</p>
    //             </div>
    //           </div>
    //           <blockquote className='mt-8 italic text-gray-500 text-md'>
    //             "Mr. Venkat Reddy is good guy and very co ordinated and given
    //             all his best and excellent service to me I will refer my friends
    //             and family to rks motors tardbund."
    //           </blockquote>
    //         </div>
    //         <div className='flex flex-col items-start justify-start w-full h-auto lg:w-1/3'>
    //           <div className='flex items-center justify-center'>
    //             <div className='w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full'>
    //               <img
    //                 src='https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=1800&t=st=1709009087~exp=1709009687~hmac=be37fd25992f7bef82371504fbb517783f7f25fa98e40be1d8baf29d3f18c50d'
    //                 className='object-cover w-full h-full'
    //                 alt='review-3'
    //               />
    //             </div>
    //             <div className='flex flex-col items-start justify-center'>
    //               <h4 className='font-bold text-xl text-[#293e91]'>
    //                 Jagadish Kumar
    //               </h4>
    //               <p className='text-sm text-gray-500'>Business Man</p>
    //             </div>
    //           </div>
    //           <blockquote className='mt-8 italic text-gray-500 text-md'>
    //             "Excellent Work from Sales Person Mr. Tirupati happy with rks
    //             motors tadbund showroom Receiving was excellent 👍 all covid
    //             saftey taken at showroom i really awsome all staff 😍👌💯 i will
    //             prefer to rks motors tadbund thank you 🙏"
    //           </blockquote>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      className="container py-20 mx-auto my-5 lg:py-10 lg:px-8 rounded-3xl "
      id="testimonials"
    >
      <p
        className="text-center mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#293e91]"
        x-intersect="$el.classList.add('tracking-in-expand')"
      >
        Testimonials
      </p>
      <p
        className="mb-8 text-lg text-center font-extralight"
        x-intersect="$el.classList.add('fade-in-bottom')"
      >
        Discover what others have to say
      </p>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-8">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp"
                className="mx-auto"
                alt="offers"
              />
              <p className="py-2 text-base font-semibold text-center text-blue-800">
                {item.author}
              </p>
              <div className="flex items-center justify-center space-x-1">
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
              </div>
              <p className="text-sm text-center">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
