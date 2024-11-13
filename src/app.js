import express from "express" ; 
import dotenv from "dotenv" ;
import artistRouter from "./routes/artistRoutes.js";

dotenv.config() ;  

const PORT = process.env.PORT || 3000 ; 


const app=express() ; 

app.use(express.json()) ; 

app.use('/api/artists', artistRouter);

app.listen(PORT , ()=> {
    console.log(`The Server listen on the port ${PORT}`) ; 
})