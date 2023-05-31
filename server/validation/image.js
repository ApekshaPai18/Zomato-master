import joi from "joi";

export const ValidateImages=(imageObject)=>{
    
      const Schema=joi.object({
        images:joi.array().items(joi.object({location:joi.string()}))

});

return Schema.validateAsync(imageObject);
};
