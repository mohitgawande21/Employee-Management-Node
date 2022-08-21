require('dotenv').config()
const express=require('express')
const app= express()
const port=3000;
const employeesRouter = require('./Router')
const mongoose=require('mongoose')
const db=mongoose.connection
const url=process.env.DATABASE_URL
mongoose.connect(url)

db.on('error', console.log)

db.once('open', () => {
    console.log('connection to mongodb started successfully')
})

app.use(express.json())

app.use('/employees',employeesRouter)

app.listen(port,()=>{
    console.log(`express app is listening on https://localhost:${port}/employees`)
})