import express from 'express'
import {userContolelr} from '../controller/userController.js';
import authenticateToken from '../middleware/authentication.js'
import uploadAuth from '../middleware/uploadAuth.js';
const router=express.Router();
const auth=authenticateToken.verifyToken;
const authUpload=uploadAuth.uploadedInfo;
router.get('/users',auth,userContolelr.usersAll);
router.get('/users/:id',auth,userContolelr.userArg);
router.get('/new',(req,res)=>{
    res.send('papa')
});
router.get('/login',(req,res)=>res.render('login'));
router.post('/loginuser',userContolelr.createNewUser);
router.post('/loginapi',authUpload,userContolelr.userLogin);
export default router;

