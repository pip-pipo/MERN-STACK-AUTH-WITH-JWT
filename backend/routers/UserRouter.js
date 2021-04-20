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



export default Router;