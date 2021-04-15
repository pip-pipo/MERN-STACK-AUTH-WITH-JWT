import express from 'express'
import {controller} from '../controllers/UserRoutesController.js';
const Router = express.Router();

// routers 

// getRequests

// postRequests
Router.post('/register',controller.registrationUser)
Router.post('/SignIn',controller.SignIn)



export default Router;