import express from 'express'

const app=express()
const port=3000;

app.get("/",(req,res)=>{
    res.json({name:'Ansar'})
})

app.listen(port,()=>console.log(`Server is running at 3000`))