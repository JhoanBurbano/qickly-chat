const { Socket } = require('socket.io')

const io = require('socket.io')(8900,{
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket)=>console.log("a user conected.", socket))