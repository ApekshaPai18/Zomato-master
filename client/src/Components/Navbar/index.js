import React from "react";
import SmallNav from "../Smallnavbar";
import FoodTab from "../FoodTab";
import {RiUserFill} from "react-icons/ri";
import {HiLocationMarker} from "react-icons/hi";
import {BiChevronDown} from "react-icons/bi";
import {RxDividerVertical} from "react-icons/rx";
import {AiOutlineSearch} from "react-icons/ai"

const MobileNav=()=>
{
    return(
<>
<div className=" items-center  bg-white shadow-md  justify-between flex w-full md:hidden">
<div className="w-32 px-2">

<img
src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
alt="logo" 
className="w-full h-full"

/>
</div>
<div className="flex items-center gap-2 my-2">
<button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
<span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
<RiUserFill/>
</span>
</div>
</div>
<FoodTab/>
</>
 )
};



const LargeNav=()=>
{
    return(
<>
<div className=" relative py-3 px-48 items-center justify-between flex w-full ">
<div className="w-32">

<img
src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
alt="logo" 
className="w-full h-full "

/>
</div>
<div className="w-2/3  flex items-start ">


<div className="w-full flex items-center bg-white shadow-md  px-3 gap-1  rounded-xl flex-row ">

<HiLocationMarker className="text-4xl text-zomato-300 " />

          <input
            type="input"
            className="w-1/4 h-12 focus:outline-none"
            placeholder="location" 
          />
          <BiChevronDown className="text-3xl text-gray-400 " /><RxDividerVertical className="text-4xl text-gray-400"/>
         <AiOutlineSearch className="text-4xl text-gray-400"/>

          <input
            type="input"
            className="w-3/4 focus:outline-none"
            placeholder="Search for a restaurant,cuisine or a dish" 
          />
        
        </div>
       

      
</div>

<div>

</div>
<div className="flex items-center gap-8 text-2xl">

<span className="text-gray-400 text-xl">
Log in
</span>
<span className="text-gray-400 text-xl ">
Sign up
</span>
</div>


</div>

<div className="absolute py-20 px-48">
<nav>
    
    <a href="">Home/</a>
    <a href="">India/</a>
<span className="text-gray-400">
    <a href="">Mangalore Restaurants</a>
    </span>
   
</nav>

</div>
<SmallNav/>



</>
 )
};







const Navbar=()=>{
    return(
    <>
    <div className="container mx-auto lg:px-20">
    <nav className="py-4 items-center">
       <div className="md:hidden">{
        <MobileNav/>
        
       }

        </div>

        <div className="hidden  md:flex">
          {
            
            <LargeNav />
           
          }
        </div>

      







    </nav>

   
   
    </div>
   
    
    </>
    )

};

export default Navbar;