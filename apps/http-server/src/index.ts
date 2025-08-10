import express from "express";
import {client} from "@repo/db/client"
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    return res.json({
        msg : "Hello"
    })
})

app.post("/signup",async (req,res)=>{
    const {username , password} = req.body;
    await client.user.create({
        data : {
            username,password
        }
    })

    return res.json({
        msg : "Signup Successfull !"
    })
    
})

app.listen(3000)