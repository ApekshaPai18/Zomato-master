import React from "react";
import {CiDeliveryTruck} from "react-icons/ci"

const SmallNav=()=>
{
return(
<>
<div className="absolute py-32 px-56 w-full flex items-center justify-between">
    
<div className="flex  items-center  ">
    <div className=" flex  border p-4 border-gray-400 rounded-full bg-gray-200">
        
    <CiDeliveryTruck className="text-2xl"/>
    </div>
    <div className="flex  text-2xl py-3 text-gray-400" >
        <a href="">Delivery</a>
    </div>
   
    
</div>

<div className="flex  items-center">
    <div className=" flex  border p-4 border-gray-400 rounded-full bg-gray-200">
        
    <CiDeliveryTruck className="text-2xl"/>
    </div>
    <div className="flex text-2xl py-3 text-gray-400" >
        <a href="">Delivery</a>
    </div>
   
    
</div>

<div className="flex items-center">
    <div className=" flex  border p-4 border-gray-400 rounded-full bg-gray-200">
        
    <CiDeliveryTruck className="text-2xl"/>
    </div>
    <div className="flex text-2xl py-3 text-gray-400" >
        <a href="">Delivery</a>
    </div>
   
    
</div>



   

</div>


</>

)
}



export default SmallNav;