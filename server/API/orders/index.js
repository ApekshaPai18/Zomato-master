import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/order";
import { ValidateOrderId } from "../../validation/order";

const Router=express.Router();

/*
Route       /
Des        Get all orders
params    _id
Access      public
Method      GET
*/

Router.get("/:_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    try{
       // await ValidateOrderId(req.params);

        const {_id}=req.params;
        const getOrders=await OrderModel.findOne({user:_id});
        if(!getOrders){
            return res.status(404).json({error:"user not found"})
        }



    }catch(error){
        return res.status(500).json({error:error.message} );

    }

});


/*
Route       /new
Des       Add new order
params    _id
Access      public
Method      POST
*/

Router.post("/new/:_id",async(req,res)=>{
    try{
        await ValidateOrderId(req.params);
        const {_id}=req.params;
        const {orderDetails}=req.body;
        const addNewOrder=await OrderModel.findOneAndUpdate(
            {
                user:_id
            },
            {
                $push:{orderDetails:orderDetails}
            },
            {
                new:true
            }
        );

        return res.json({order:addNewOrder});

    }catch(error){
        return res.status(500).json({error:error.message} );

    }
});

export default Router;