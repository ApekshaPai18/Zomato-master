import { RestaurantModel } from "../../database/restuarant";
import express  from "express";
const Router=express.Router();

//validate

import { ValidateRestaurantSearchString,ValidateRestaurantCity } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

/*

Route      /
Des       Get all Restaurants details
Params    None
Access    public
Method     GET
*/

Router.get("/",async(req,res)=>{
    try{
        await ValidateRestaurantCity(req.query);
        const {city} = req.query;
        const restaurants=await RestaurantModel.find({city});
        return res.json({restaurants});
}
    catch(error){
        return res.status(500).json({error: error.message});

        }
    
});


/*

Route      /
Des       Get particular Restaurants details
Params    _id
Access    public
Method     GET
*/

Router.get("/:id",async(req,res)=>
{
    try{
        await ValidateRestaurantId(req.params);
        const{_id}=req.params;
        const restuarant=await RestaurantModel.findOne(_id);

        if(!restuarant)
        return res.status(404).json({error:"Restaurant not found"});

    return res.json({restuarant});
    
    }
    catch(error){
        return res.status(500).json({error:error.message});

    }
});

/*

Route      /search
Des       Get Restaurants details search
Params    none
Body      searchString
Access    public
Method     GET
*/

Router.get("/search",async(req,res)=>{
    try{
        await ValidateRestaurantSearchString(req.body);
        const {searchString}=req.body;
        const restaurants=await RestaurantModel.find({
            name:{$regex:searchString, $options:"i"},
        });

        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error:error.message})
    }
});




export default Router;