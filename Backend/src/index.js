import express from 'express'
import cookieParser from 'cookieParser'
import cors from 'cors'

const app=express()
app.use(cors({origin:process.env.CORS_ORRIGIN,Credential:true}))
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
app.use(cookieParser())


export default app