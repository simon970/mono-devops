import express from 'express';
import { prismaClient } from 'db/client';

const app= express();

app.use(express.json());


app.get('/users',async (req,res)=>{
    const users = await prismaClient.user.findMany();
    res.json({
        users
    })
})


app.post('/user',async(req,res)=>{
 const {username,password} = req.body;   
const user= await prismaClient.user.create({
    data:{
        username:username,
        password:password
    }
 })
 res.json({
    message:"Added",
    Id:user.id
 })

})