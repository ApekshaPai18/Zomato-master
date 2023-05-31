import mongoose from "mongoose";

const FoodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    descript:{type:String,required:true},
    isVeg:{type:Boolean,required:true},
    isContainsEg:{type:Boolean,required:true},
    Category:{type:String,required:true},
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    },
    price:{type:Number,default:150, required:true},
    addOns:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods"
        }
    ],
    restuarant:{
        type:mongoose.Types.ObjectId,
        ref:"Restuarants",
        required:true
    }

},
{
    timestamps:true
}
);

export const FoodModel=mongoose.model("Foods",FoodSchema);