const express=require('express')
const app= express()
const port=3000;
const employees = require('./Router')

app.use(express.json())

app.use('/employees',employees)

app.listen(port,()=>{
    console.log(`express app is listening on https://localhost:${port}/employees`)
})