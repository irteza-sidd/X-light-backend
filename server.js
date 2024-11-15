const express= require('express');
const dotenv=require('dotenv').config();

const app = express();

app.listen(3000,()=>{
    console.log('server is running on PORT',process.env.PORT)
})