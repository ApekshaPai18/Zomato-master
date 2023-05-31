//HOC
import {useDispatch} from "react-router";
import {useParams} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
//components 


import Navbar from "./Components/Navbar";
import FoodTab from "./Components/FoodTab";
import Master from "./Components/master";
import { getRestaurant } from "./Redux/restaurant/restaurant.action";
import { useEffect } from "react";
//import HeroCarousal from "./Components/HeroCarousal";

const dispatch=useDispatch();
useEffect(()=>
{
  dispatch(getRestaurant())
},[]);

function App() {
  
  return (
    
  
<Routes>
   <Route path="/"  element={[<Navbar/>]}/>
   <Route path="/:type"  element={[<Navbar/>,<Master/>]}/>
  
   </Routes>
     
     
     
  );
}

export default App;
