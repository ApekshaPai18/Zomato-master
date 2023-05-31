//libraries

import  express  from "express";

import { MenuModel,ImageModel} from "../../database/allModels";
import { ValidateRestaurantId } from "../../validation/food";


const Router=express.Router();

/*

Route      /list
Des       Get all menu of particular Restaurants 
Params    _id

Access    public
Method     GET
*/

Router.get("/list/:_id",async(req,res)=>{
    try{
        await ValidateRestaurantId(req.params);
      const {_id}=req.params;
      const menus=await MenuModel.findOne(_id);
      return res.json({menus});
    }catch(error){
        return res.status(500).json({error:error.message});

    }

});


/*

Route      /image
Des       Get all image
Params    _id

Access    public
Method     GET
*/
Router.get("/image/:_id",async(res,req)=>
{
    try{
        await ValidateRestaurantId(req.params);
        const {_id}=req.params;
        const menus=await ImageModel.findOne(_id);
        return res.json({menus});

    }catch(error){
        return res.status(500).json({error:error.message});

    }
})

export default Router;