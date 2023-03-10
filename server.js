const express=require('express')
const dotenv=require('dotenv')

//Load dotenv variables
dotenv.config({path:'./config/config.env'})

const app=express()




const PORT=process.env.PORT||5000
app.listen(PORT, ()=>{
    console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`);
})