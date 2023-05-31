import express from "express";

import { UserModel } from "../../database/user";

const Router=express.Router();

/*
Route       /_id
Des        get an user data
params    _id
BODY       none
Access      public
Method    get
*/



Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const getUser=await UserModel.findById(_id);
        return res.json({user:getUser});
      }catch(error){
        return res.status(500).json({error:error.message} );

    }
});


/*
Route       /update
Des       update an user data
params    _userid
BODY       user data
Access      public
Method    put
*/



Router.put("/update/:_userId",async(req,res)=>{
    try{
        const {userId}=req.params;
        const {userData}=req.body;
       const updateUserData=await UserModel.findByIdAndUpdate(
        userId,
        {
            $set:userData
        },
        {new:true}
       );
        return res.json({user:updateUserData});
     


       

    }catch(error){
        return res.status(500).json({error:error.message} );

    }
});




export default Router;