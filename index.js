const express = require("express")
const session = require('express-session')
const app = express()
 
// Port Number Setup
var PORT = process.env.port || 3000

// Session Setup
app.use(session({
    secret: 'Your_Secret_Key',
    resave: true, // Forces the session to be saved back to the session store
    saveUninitialized: true  // Forces a session that is "uninitialized" to be saved to the store
}))

app.get("/",function(req,res){
    
    // req.session.key = value
    req.session.name = 'GeeksforGeeks'
    return res.send("Session Set")
    
})

app.get("/session",function(req,res){

    var name = req.session.name
    return res.send(name)
})
 
app.listen(PORT,function(error){
    if(error) throw error
    console.log("Server created Successfully on PORT :",PORT)
})