import express from 'express'
import {userContolelr} from '../controller/userController.js';
import authenticateToken from '../middleware/authentication.js'
const router=express.Router();
const auth=authenticateToken.verifyToken;
router.get('/users',auth,userContolelr.usersAll);
router.get('/users/:id',auth,userContolelr.userArg);
router.get('/new',(req,res)=>{
    res.send('papa')
})
router.get('/userlogin',userContolelr.userLogin);
router.post('/createNewUser',userContolelr.createNewUser);
export default router;

