const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const entregas = require("./src/entregas/entregas.json")

app.get("/entregas", (req, res)=>{
    return res.json(entregas)
})

app.listen(port, () =>{
    console.log("Servidor esta rodando...")
})