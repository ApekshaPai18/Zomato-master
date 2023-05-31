import  express  from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



const Router=express.Router();

import { UserModel } from "../../database/user";


import passport from "passport";


import { ValidateSignup, ValidateSignin } from "../../validation/auth";

/*
Route       /signup
Des         Signup with email and password
params      None
Access      public
Method      POST
*/

Router.post("/signup", async(req,res)=>{
    try{
        
      await ValidateSignup(req.body.credentials);
     
        await UserModel.findEmailAndPhone(req.body.credentials);
      //DB
      const newUser =await UserModel.create(req.body.credentials);


        //JWT Web Token
        const token=newUser.generateJwtToken();

        return res.status(200).json({token});


    }
    catch(error)
    {
       return res.status(500).json({error:error.message});
    }

});




/*
Route       /signin
Des         Signin with email and password
params      None
Access      public
Method      POST
*/

Router.post("/signin", async(req,res)=>{
  try{

    await ValidateSignin(req.body.credentials);
    const user=await UserModel.findByEmailAndPassword(
      req.body.credentials
    )
       //JWT Web Token
      const token=user.generateJwtToken();

      return res.status(200).json({token,status:"Success"});


  }
  catch(error)
  {
     return res.status(500).json({error:error.message});
  }

});


/*
Route       /google
Des         google signin 
params      None
Access      public
Method      GET
*/
Router.get("/google",passport.authenticate("google",{
  scope:[
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"

  ],
})
);




/*
Route       /google/callback
Des         google signin callback
params      None
Access      public
Method      GET
*/
Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
(req,res)=>{
  return res.json({token:req.session.passport.user.token});
}
);







export default Router;