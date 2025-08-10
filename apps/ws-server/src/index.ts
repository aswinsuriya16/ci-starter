import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const wss = new WebSocketServer({port  : 5000},()=>{
    console.log("port on 5000")
});

wss.on('connection',async (socket)=>{
    console.log("User connected");
    socket.send("Hello from the server")

    await client.user.create({
        data : {
            username : "websocket server check",
            password : "4324"
        }
    })

})