import joi from "joi";

export const ValidateReview=(reviewData)=>{
    
      const Schema=joi.object({
        rating:joi.number(),
        reviewText:joi.string()
       

    
});

   return Schema.validateAsync(reviewData);
};


