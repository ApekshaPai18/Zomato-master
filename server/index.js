require("dotenv").config();

import express  from "express";
import cors from "cors";
import helmet from "helmet";
//import passport from "passport";

//config
 import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

 //API
 import Auth from "./API/Auth";
 import Restaurant from "./API/Restaurant";
 import Food from "./API/Food";
 import Menu from "./API/Menu";
 import Image from "./API/Image";
 import Orders from "./API/orders";
 import Reviews from "./API/reviews";

//Database connection
import ConnectDB from "./database/connection";
import passport from "passport";




const zomato=express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
// zomato.use(session({}));
zomato.use(passport.initialize());
zomato.use(passport.session());



//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//For Application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/orders",Orders);
zomato.use("/reviews",Reviews);

zomato.get("/",(req,res)=>res.json({message:"Setup Success"}));


zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("server is up and running"

)).catch(()=>
console.log("DB connection failed")));