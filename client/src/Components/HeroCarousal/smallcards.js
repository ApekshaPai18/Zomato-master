import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "./Arrows";

const HeroCarousal=(props)=>{
 
   
return(
    <>
    <div className="w-full h-full py-3">
        <img
        className="w-11/12 h-60 rounded-xl "
        src={props.src}
        alt="cards"
        />
    </div>
    </>
);
};

const SmallCards=()=>{


    const images=[
        "https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.BElUXw2g8IAQoHoj2riNsQHaE8&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.bcdw7xaCemMvqhqE0Qgm-AHaF6&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.BElUXw2g8IAQoHoj2riNsQHaE8&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.bcdw7xaCemMvqhqE0Qgm-AHaF6&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.S9PPN5Fe4mjN26-qHmnIMQHaEK&pid=Api&P=0&h=180"

    ];

 const settings = {
     
      infinite: true,
      autoplay:false,
      slidesToShow:2,
      slidesToScroll: 1,
      InitialSlide:0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>
    };

    return(
        <>
        <HeroSlider {...settings}>
        {
     images.map((image)=>
  (
   
   <HeroCarousal src={image}/>
   
  ))
        }

        </HeroSlider>
        
        </>
    )
};

export default SmallCards;