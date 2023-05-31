import React from "react";
// import DeliveryFoodCategory from "../Delivery/DeliveryFoodCategory";
// import { NextArrow,PrevArrow } from "../HeroCarousal/Arrows";
//import HeroCarousal from "../HeroCarousal";
import SmallCards from "../HeroCarousal/smallcards";
import LargeCards from "../HeroCarousal/largecards";

const DiningOut=()=>
{
    return(
<>
<div className="container mx-auto ">
<h1 className="text-2xl font-bold  my-3">Collections</h1>
<div>
<p className="text-sm text-gray-600"> Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
</div>
<SmallCards/>



<div className="text-2xl font-bold  my-4">

   <h1>Best Dining Restaurants near you in Mangalore</h1>
<div className="py-3">
<LargeCards/>
</div>
</div>
</div>

</>



    )
}

export default DiningOut;