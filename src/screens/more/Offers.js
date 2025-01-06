import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { mobileOffersSliders } from "../../constants";
import { offersSliders } from "../../constants";
import { Link } from "react-router-dom";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";

const offer_products = [
  // {
  //   name: 'Alto',
  //   price: '15,000', //15000
  //   logo: 'Alto',
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-alto800.webp',
  //   explore: '/maruti-alto-800-on-road-price-in-hyderabad',
  // },
  {
    name: "Swift 2024",
    price: "93,143",
    desc:"+Blitz Kit",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp",
    explore: "/maruti-swift-car-on-road-price-in-hyderabad",
  },
  {
    name: "Brezza 2024",
    price: "58,000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-brezza.webp",
    // img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/offers/maruti-suzuki-brezza.webp",
    explore: "/maruti-new-brezza-on-road-price-in-hyderabad",
  },
  {
    name: "Alto K10",
    // price: '61000',
    price: "46,100",
    logo: "Alto k10",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp",
    explore: "/maruti-alto-800-on-road-price-in-hyderabad",
  },
  // {
  //   name: 'Alto K10',
  //   price: '50000',
  //   logo: 'Alto',
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-k10/new-alto-k10.webp',
  //   explore: '/maruti-alto-800-on-road-price-in-hyderabad',
  // },
  {
    name: "S-Presso",
    price: "46,100",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp",
    explore: "/maruti-s-presso-on-road-price-in-hyderabad",
  },
  {
    name: "WagonR ",
    price: "46,100",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp",
    explore: "/maruti-wagon-r-on-road-price-in-hyderabad",
  },

  {
    name: "Celerio",
    price: "46,100",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp",
    explore: "/the-all-new-celerio",
  },

 // {
   // name: "Swift 2023",
 //   price: "33,000",
 //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-swift.webp",
  //  explore: "/maruti-swift-car-on-road-price-in-hyderabad",
  //},

  {
    name: " Old Dzire",
    price: "33,000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp",
    explore: "/maruti-swift-dzire-on-road-price-in-hyderabad",
  },

  {
    name: "EECO",
    price: "43,000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp",
    explore: "/maruti-eeco-on-road-price-in-hyderabad",
  },

  // {
  //   name: "Ertiga",
  //   price: "0",
  //   discount: "Low Cost EMI",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/maruti-ertiga/ertiga_2.png",
  //   explore: "/maruti-ertiga-on-road-price-in-hyderabad",
  // },
   {
    name: "Tour H3",
    price: "73,000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-H3.png",
     img: 'https://saboomaruti.in/static/media/wagonR.47c3c101c4c120a22870.webp',
    explore: "/maruti-wagnor-tour-h3-on-road-price-in-hyderabad",
  },
  {
    name: "Tour H1",
    price: "75,000",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/tour-H1.png",
    explore: "/maruti-alto-tour-h1-on-road-price-in-hyderabad",
  },
  {
    name: "Tour V",
    price: "33,000",
   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-V.png",
    explore: "/maruti-eeco-tour-v-on-road-price-in-hyderabad",
  },
  {
   name: "Tour S",
    price: "60,146",
    desc:" Tour s Plus Kit",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-S.png",
    explore: "/maruti-dzire-tour-s-on-road-price-in-hyderabad",
  },
  {
    name: "Tour M",
    price: "43,000",
   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-M.png",
    explore: "/maruti-ertiga-tour-m-on-road-price-in-hyderabad",
  },
];

function Offers() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki 2025 Discounts and festive Offers in Hyderabad at Saboo
          Maruti Suzuki - RKS Motor
        </title>
        <meta
          name="title"
          content="  Saboo Maruti 2025 Discounts and festive Offers on
          New Maruti Suzuki Cars at Saboo Maruti Suzuki - RKS Motor"
        />
        <meta
          name="description"
          content="2025 Discounts and festive Offers at Saboo Maruti Suzuki Arena! Don`t miss out on incredible deals and savings. Visit us today to drive home your dream car"
        />
        <meta
          name="keywords"
          content="2025 Year Maruti offers, maruti exchange January offers, Festival Offfers, January 2024 offers, January offers, maruti car offers, maruti spresso offers, maruti alto offers, maruti wagonr offers, maruti celerio offers, maruti celerio x offers, maruti eeco offers, maruti ertiga offers, maruti brezza offers, maruti swift offers, maruti dzire offers, spresso offers, alto offers, wagonr offers, celerio offers, celerio x offers, ertiga offers, swift offers, dzire offers, brezza offers,eeco offers,2025 Discounts and festive Offers"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/" />
        <meta
          property="og:title"
          content="Offers and discounts during 2025 Year | 2025 Discounts and festive Offers on
          New Maruti Suzuki Cars at Saboo Maruti Suzuki - RKS Motor"
        />
        <meta
          property="og:description"
          content="Special occasion on 2025 Discounts and festive Offers at Saboo Maruti Suzuki Arena! Don`t miss out on incredible deals and savings. Visit us today to drive home your dream car"
        />
        <meta property="og:image" content="img/og-tags/offers.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboomaruti.in/" />
        <meta
          property="twitter:title"
          content=" 2025 Discounts and festive Offers | 2025 Discounts and festive Offers on
          New Maruti Suzuki Cars at Saboo Maruti Suzuki - RKS Motor"
        />
        <meta
          property="twitter:description"
          content="Special occasion on 2025 Discounts and festive Offers at Saboo Maruti Suzuki Arena! Don`t miss out on incredible deals and savings. Visit us today to drive home your dream car"
        />
        <meta property="twitter:image" content="img/og-tags/offers.webp" />
      </Helmet>
      <Header />
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="hidden mySwiper lg:mt-16 sm:block"
      >
        {offersSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt="offers"
              className="w-full desktop_slider"
            />
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer left-10 top-1/2"
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer right-10 top-1/2"
        >
          <GrFormNext />
        </div>
      </Swiper>
      <MobileSlider />
      <div className="my-10 space-y-2 text-center">
        <p className="text-2xl font-semibold text-blue-900">
          Hurry and take advantage of these exciting offers available for a
          limited time until the end of {months[new Date().getMonth()]}-
          {new Date().getFullYear()}.
        </p>
        {/* <p className="container w-full mx-auto my-auto text-sm italic text-red-500 font-extralight">
          <span className="font-semibold">Disclaimer:</span> Exclusive offers on
          2023 models — avail the deal before stocks run out.
        </p>
        <p>
          Last Chance to buy, before price hike. Limited Period to avail
          exciting offers before prices go up
        </p> */}
        {/* <p className='text-xs'>
          <strong>Note:</strong> This Saboo RKS Maruti Suzuki offer is updated
          on 01-{months[new Date().getMonth()]}-{new Date().getFullYear()}. 
        </p> */}
      </div>

      <div className="container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-0">
        {offer_products.map((item) => (
          <div
            className="flex flex-col bg-[#eee] rounded shadow-lg border relative overflow-hidden"
            key={item.name}
          >
            <p className="absolute shadow-xl top-3 -right-7 uppercase text-sm text-center text-white rotate-45 bg-[#ec1b23] py-1 w-28">
              Offer
            </p>

            <div className="flex-auto ">
              <img src={item.img} alt={item.name} className="w-full mx-auto" />
            </div>
            <div className="flex-auto bg-white">
              <div>
                <div className="flex items-center justify-between p-5 ">
                  {/* <img src={item.logo} alt={item.name} /> */}
                  <p className="text-xl font-bold">
                    <i>{item.name}</i>
                  </p>
                  <p className="font-bold">
                    <span className="text-sm font-light text-gray-600">
                      Save up to <br />{" "}
                    </span>
                    <span className="text-xl text-red-500 uppercase ">
                      {/* <sup>*</sup> */}
                      <span className="text-xs font-extralight">₹</span>{" "}
                      {item.price}*
                    </span><br/>
                   <span>{item.desc}</span>
                    &nbsp;&nbsp;&nbsp;
                  </p>
                </div>
                <div className="flex flex-col w-full px-5 mb-3">
                  <Link
                    to={item.explore}
                    className="py-2 font-bold text-center text-white uppercase bg-blue-900 rounded-full hover:animate-pulse hover:bg-red-700"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container px-5 pb-5 mx-auto mb-10 text-sm sm:px-0">
        <p>
          Note: These offers are valid till 31th of jan 2025 above offers
          including consumer, exchange, institutional, rural offers
        </p>
      </div>
    </>
  );
}

function MobileSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper sm:hidden"
      >
        {mobileOffersSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              className="w-full max-w-full lg:mt-16"
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Offers;
