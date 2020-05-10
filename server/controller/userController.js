const {User}=require('../models')
const {generateToken,verifyToken}=require('../helpers/jwt')
const bcrypt = require('bcrypt');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID=process.env.CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);

class UserController{
    static register(req,res,next){
        const { email, password } = req.body;
        const created = {
            email,
            password
        }
        User.findOne({
            where: {
                email
            }
        })
        .then(data=>{
            if(!data){
                return User.create(created)
            }else{
                next({name: 'Forbidden'})
            }
        })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static login(req,res,next){
        const {email,password}=req.body
        User.findOne({
            where:{
                email
            }
        })
        .then(user=>{
            if(!user){
                next({name:"Invalid email or password"})
            }
            const payload = { 
                id: user.id,
                email: user.email
            }
            if(bcrypt.compareSync(password,user.password)){
                const token = generateToken(payload);
                res.status(200).json({token})
            }else{
                next({name:"Invalid email or password"})
            }
        })
        .catch(err=>{
            next(err)
        })
    }

    static googleSignIn(req,res,next){
        const token=req.body.id_token
        let currentEmail
        client.verifyIdToken({
            idToken:token,
            audience:CLIENT_ID
        })
        .then(access=>{
            const payload = access.getPayload();
            currentEmail = payload['email'];
            return User.findOne({
                where:{
                    email:currentEmail
                }
            })
        })
        .then(user=>{
            if(user){
                console.log(user)
                const payload={
                    id:user.id,
                    email:user.email
                }
                const token=generateToken(payload)
                res.status(200).json({token})
                return
            }else{
                return User.create({
                    email: currentEmail,
                    password:"randompassword"
                })
            }
        })
        .then(newUser=>{
            console.log(newUser)
            const newPayload={
                id:newUser.id,
                email:newUser.email
            }
            const token=generateToken(newPayload)
            res.status(200).json({token})
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports=UserController