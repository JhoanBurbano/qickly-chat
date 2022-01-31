const io = require('socket.io')(8900,{
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUsers = (userId, socketId)=>{
    !users.some((user)=>user?.userId===userId) && users.push({userId, socketId})
} 

const removeUser = (socketId) =>{
    users = users.filter(user => user.socketId!==socketId)                                                                                                                                                                                                                                                                                                            
}

const getUser = (userId) =>{
    console.log(users.find(user=>user.userId === userId))
   return users.find(user=>user.userId === userId)
}

io.on("connection", (socket)=>{
    console.log("a user conected.")
    socket.on("addUser", (userId)=>{
        addUsers(userId, socket.id)
        io.emit("getUsers", users)
    })


    socket.on("sendMessage", ({senderId, receiverId, text})=>{
        const user = getUser(senderId)
        io.to(user.socketId).emit("getMessage", {
            senderId,
            receiverId,
            text
        })
    })

    socket.on('disconnect', ()=>{
        console.log('a user disconnected!')
        removeUser(socket.id)
    })
})