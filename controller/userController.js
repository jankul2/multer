import user from '../model/userModel.js';
import jwt from 'jsonwebtoken';
import authenticateToken from '../middleware/authentication.js'
import dotenv from 'dotenv';
import {authSchema} from '../vaidator/userValidator.js';
import createErrors from 'http-errors';

//import { decodeBase64 } from 'bcryptjs';

dotenv.config();
class UserController{
    constructor(user){
        this.user=user;
    }
    usersAll= async (req,res)=>{
      try{
        const userInfo= await this.user.users();
        userInfo.then(data=>res.send(data));
      }catch(error){

      }
      
    }
    userArg= async (req,res)=>{
        let id=req.params.id;
        const userInfo= await this.user.users(id);
        userInfo.then(data=>res.send(data));

      }
      userLogin= async(req,res,next)=>{
        try{
       const { username,password } = await req.body;
        /*if(!req.file || Object.keys(req.file).length==0){
          console.log('file is required')
        }*/
        const validator= await authSchema.validateAsync(req.body,function(err, value) {
          if (err) {
            console.log('hi test')
            return catched(err.message); 
          }
        });
        //console.log(validator)
        //console.log(req.body,req.file)
        //authenticateToken.accessToken(username);
        //throw createErrors('404','this is required');
        res.status(200).send('hi')
      }catch(error){
        if(error.isJoi==true){
          error.status='422';
        }
        next(error);
      }

      }
     
      createNewUser= async (req, res) => {
        const token = await this.generateAccessToken({ username: req.body.username });
        res.json(token);
      };
      
}
export const userContolelr= new UserController(user,authenticateToken);