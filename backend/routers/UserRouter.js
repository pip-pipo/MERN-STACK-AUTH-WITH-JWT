import express from 'express'
import {controller} from '../controllers/UserRoutesController.js';
import Authenticate from '../middlewares/AuthenticateUser.js';
const Router = express.Router();

// routers 

// getRequests
Router.get('/about',Authenticate,controller.about)

// postRequests
Router.post('/register',controller.registrationUser)
Router.post('/SignIn',controller.SignIn)


// files upload routers




// file formater
const fileSizeFormater = (bytes, decimal) => {
 if (bytes === 0) {
  return "0 Bytes"
 }
 const dm = decimal || 2
 const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"]
 const index = Math.floor(Math.log(bytes) / Math.log(1000))
 return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
}




export default Router;