import express from "express";

import { ReviewModel } from "../../database/reviews";
import { ValidateReview } from "../../validation/review";

const Router=express.Router();

/*
Route       /new
Des        add new review
params    none
BODY       review object
Access      public
Method     post
*/



Router.post("/new",async(req,res)=>{
    try{
        await ValidateReview(req.body);
        const {reviewData}=req.body;
        await ReviewModel.create(reviewData);
        return res.json({review:"successfully created review"});

       

    }catch(error){
        return res.status(500).json({error:error.message} );

    }
});


/*
Route       /delete
Des        add new review
params    _id
BODY       review object
Access      public
Method    delete
*/



Router.post("/delete/:_id",async(req,res)=>{
    try{
        
        const {_id}=req.body;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review:"successfully deleted review"});

       

    }catch(error){
        return res.status(500).json({error:error.message} );

    }
});



export default Router;