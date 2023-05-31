import React from "react";
import { useParams } from "react-router-dom";

//components
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";

const Master=()=>
{
    const {type}=useParams();
    return (
    <> 
    <div className="m-4">
    {type==="delivery" && <Delivery/>}
    {type==="dining" && <DiningOut/>}
    </div>
    </>
    )
};

export default Master;