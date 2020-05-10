const router =require('express').Router()
const musikController=require('../controller/musikController')
const userController=require('../controller/userController')
const errorHandler = require('../middleware/errorHandler')
const authentication=require('../middleware/authentication')


router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/googleSignIn',userController.googleSignIn)
router.get('/album',authentication, musikController.album)
router.get('/song',authentication,musikController.song)
router.use(errorHandler)


module.exports=router