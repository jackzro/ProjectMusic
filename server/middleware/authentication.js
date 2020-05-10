const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')
const secretKey="polalala"

function authentication(req,res,next){
    const {token}=req.headers
    if(!token){
        next({name:"token not found"})
    }
    if(token){
        const decoded=verifyToken(token)
        req.decoded=decoded
        next()
    }else{
        next({name:"JsonWebTokenError"})
    }


}

module.exports=authentication