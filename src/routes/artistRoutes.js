import express from "express" ; 
import { GetUsersByName } from "../controllers/artistController.js";

const artistRouter = express.Router() ; 

artistRouter.get('/' , GetUsersByName) ; 

export default artistRouter ; 