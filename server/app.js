const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const userController=require('./controllers/userController')


const app=express()
app.use(bodyparser.json())
app.use(cors())

app.use('/user',userController)

app.get('/',(req,res)=>{
    res.send('app module')
})

app.listen(3002,()=>{
console.log('listening on port 3002')
})