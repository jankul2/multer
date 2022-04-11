import jwt from 'jsonwebtoken';
class authenticateToken{
    verifyToken = (req, res, next)=>{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.status(401).send({error:err})
        jwt.verify(token, process.env.TOKEN_SECRET,(err, user) => {
          //console.log(err)
          if (err) return res.status(403).send({error:err})
      
          req.user = user
      
          next()
        })
      }

    accessToken = (username)=> {
        return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
      }
      
    
}

export default new authenticateToken;