// import joi from "joi";

// export const ValidateOrderId=(orderId)=>{
    
//       const Schema=joi.object({
//        orderDetails:joi.array().items(joi.object(
//       {quantity:joi.number().required()},
//       {paymode:joi.string().required()},
//       {status:joi.string.default(placed)},
// )),
// PaymentDetails:joi.array().items(joi.object(
//     {itemTotal:joi.number().required()},
//     {promo:joi.number().required()},
//     {tax:joi.number().required()}

// )),
// orderRatings:joi.number()

// });

//    return Schema.validateAsync(orderId);
// };

