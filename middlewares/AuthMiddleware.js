import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: 'Geçersiz token, kimlik doğrulama reddedildi' });
      }
    jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
        if(err){
            return res.status(401).json({ error: 'Geçersiz token, kimlik doğrulama reddedildi' });
        }
        else{
            req.user = decodedToken;
            next();
        }
    }
    )


};

export { userAuth};