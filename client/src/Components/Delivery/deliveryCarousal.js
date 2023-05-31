import React from "react";
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DelivryCarousal=()=>
{
    return(
<>
<h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>

<div className="flex flex-col  gap-3">
    <DeliveryFoodCategory/>
    <DeliveryFoodCategory/>
    <div>
        <img
        src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png"
        alt="image"
        className=""
        />
        </div>
    <DeliveryFoodCategory/>
    <DeliveryFoodCategory/>
</div>


</>



    )
}

export default DelivryCarousal;