const express=require('express')
const redis = require("redis")
const app=express()

const publisher = redis.createClient()
publisher.connect()
setInterval(() => {
    let randomnumber = Math.floor(Math.random()*100000)
    publisher.publish("sent-number", `${randomnumber}`)
    console.log("sent "+randomnumber)
},'2000')


app.listen(3030,()=>{
    console.log("Server started")
})



