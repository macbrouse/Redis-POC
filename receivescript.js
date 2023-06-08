const express=require('express')
const redis = require("redis")
const app = express()

const subscriber = redis.createClient()
subscriber.connect()
subscriber.subscribe("sent-number",message => {
    console.log("Received " + message)
  })

app.listen(3000,()=>{
    console.log("Server started")
})