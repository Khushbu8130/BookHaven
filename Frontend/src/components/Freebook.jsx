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
        const res = await axios.get("http://localhost:4001/book");
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
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div> <h1 className="font-semibold text-xl pb-2">Trending Free Books</h1>
      <p>Discover popular and free learning resources in our <span className="text-pink-500">Trending Free Books</span> section. Explore a variety of books to boost your knowledge.</p>
      <p><span className="text-pink-500">Looking for more?</span> Visit the <a href="/course"><b><u>Courses</u></b></a> section for additional books organized by branches and subjects.</p></div>
     
    </div>
    <div>
    <Slider {...settings}>
       {book.map((item)=>(
        <Cards item={item} key={item.id} />
       ))}
      </Slider>
      </div>
    </>
  
  );
}

export default Freebook ;