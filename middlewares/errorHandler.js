
const errorHandler = (err, req, res, next) => {
  if(err){
    switch (err.name) {
      case "WrongEmail":
        res.status(401).json({
          message: 'Unauthorized. Please try again with valid credentials'
        })
        break;
      case "WrongPassword":
        res.status(401).json({
          message: 'Unauthorized. Please try again with valid credentials'
        })
        break;
      case 'DataNotFound':
        res.status(404).json({
          message: 'Data not found'
        })
        break;
      case "Forbidden":
        res.status(403).json({
          message: 'Forbidden. Please try again with valid credentials'
        }) 
        break;
      case 'InvalidToken':
        res.status(500).json({
          message: 'Invalid Token. Please try again with valid credentials'
        })
        break;
      case 'NoJWT':
        res.status(403).json({
          message: 'Forbidden. Access token needed'
        })
        break;
      case 'Please Login First':
        res.status(401).json({
          message: 'Please Login First'
        })
      default:
        res.status(500).json({
          message: 'Internal server error'
        })
        break;
    }
  }
}

module.exports = errorHandler
