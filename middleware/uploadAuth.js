import multer from  'multer';
import path from 'path';
import {imageUpload} from './uploadSchma.js';

class UploadAuth{
 uploadedInfo = async(req,res,next)=> {
      const uploadinfo = imageUpload.single('profile_picture');   
      uploadinfo(req, res, function (err) {
        if (err) {
            res.status(400).send({ error: err.message })
        } 
        if(!req.file || Object.keys(req.file).length==0){
          res.send({error:'file is required!'})
        }
        //console.log(req.file)
        next();
    })
}
    
}

export default new UploadAuth;