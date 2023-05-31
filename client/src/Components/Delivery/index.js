import React ,{useState,useEffect} from "react";

import {useSelector} from "react-redux";
//components
import DelivryCarousal from "./deliveryCarousal";

const Delivery=()=>
{
    const [restaurantList,setRestaurantList]=useState([]);

    const reduxState=useSelector(
        (globalStore)=>globalStore.restaurant.restaurants
    );
    useEffect(()=>{
        setRestaurantList(reduxState.restaurants);

    },[reduxState.restaurants]);
    return(
        <>
        
        <DelivryCarousal/>

        </>
    )
}

export default Delivery;