import joi from 'joi';
export const authSchema=joi.object({
  username:joi.string().required(),      
  password:joi.string().min(6).required(),
});
export const registerSchema=joi.object({
  firstname:joi.string().required(),      
  lastname:joi.string().required(),      
  email:joi.string().email().lowercase().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  confrim_password: joi.ref('password'),
})


 