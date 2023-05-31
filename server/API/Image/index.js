import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import {ImageModel} from "../../database/allModels";


//utilites
import { s3Upload } from "../../Utils/AWS/s3";
import { ValidateImages } from "../../validation/image";

const Router =express.Router();


const storage=multer.memoryStorage();
const upload=multer({storage});








/*
Route       /
Des         uploading given image to s3 bucket and then saving to mongodb
params      None
Access      public
Method      GET
*/

Router.post("/",upload.single("file"),async(req,res)=>{
    try{
        await ValidateImages(req.file);
        const file=req.file;

        //s3 bucket options
        const bucketOptions={
            Bucket:"webdevelopment12",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            ACL:"public-read"

        };
        


const uploadImage= await s3Upload(bucketOptions);
return res.json({uploadImage});

    }catch(error){
        return res.status(500).json({error:error.message});

    }
});

export default Router;