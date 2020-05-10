function errorHandling(err, req, res, next){
    let status=500
    let message="unknown error"
    switch(err.name){
        case "Forbidden":
            status=400
            message="Email is already used"
            break
        case "Invalid email or password":
            status=404
            message="Invalid email or password"
            break
        case "token not found":
            status=404
            message="token not found"
            break
        case "JsonWebTokenError":
            status=400
            message="JsonWebTokenError"
            break
        case 'Unauthorized':
            status=403
            message='Unauthorized'
            break
        case 'Data not Found':
            status=404
            message='Data not Found'
            break
        case "SequelizeValidationError":
            status=400
            const errors = err.errors.map(el => ({
                message : el.message
            }))
            message=errors
            break

    }
   res.status(status).json({message})
}


module.exports = errorHandling;