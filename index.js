const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/crudsimples', {useNewUrlParser:true})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = 8000
app.get(()=>{
    console.log("working")
})

//rotas
const rotas = require('./routes')
app.use("/api", require("./routes"));




app.listen(PORT, () => console.log("iniciado na porta" + PORT))