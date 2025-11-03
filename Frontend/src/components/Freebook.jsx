import React from "react";
import { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
// import list from "./list.json"

import Cards from "./Cards";


function Freebook() {

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookhavenn.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    getBook();
  }, []);


   var settings = {
  dots: true,
  infinite: false, // keep as false (your desktop works fine)
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4, // ✅ desktop: 4 at a time
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600, // mobile landscape
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, // ✅ scroll 1 item at a time
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480, // mobile portrait
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, // ✅ scroll 1 item at a time
        infinite: true,
        initialSlide: 0,
      },
    },
  ],
};

    
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div> <h1 className="font-semibold text-xl pb-2">Trending Free Books</h1>
      <p>Discover popular and free learning resources in our <span className="text-pink-500">Trending Free Books</span> section. Explore a variety of books to boost your knowledge.</p>
      <p><span className="text-pink-500">Looking for more?</span> Visit the <a href="/course"><b><u>Courses</u></b></a> section for additional books organized by branches and subjects.</p></div>
     
    </div>
         <style>
        {`
          .slick-dots li button:before {
            color: white !important;
            opacity: 0.75;
          }
          .slick-dots li.slick-active button:before {
            color: white !important;
            opacity: 1;
          }
        `}
      </style>
    <div>
   <Slider key={book.length} {...settings}>
  {book.map((item) => (
    <Cards item={item} key={item._id || item.id} />
  ))}
</Slider>

      </div>
    </>
  
  );
}

export default Freebook ;
