const express = require("express")
const app = express()
let nationalityOptions = require('./public/country.json')

const bodyParser = require("body-parser")

app.use('/form',express.static("public"));

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/forms.html")
})

app.get('/listnations', (req, res) => 
{res.json(nationalityOptions)})

app.post("/home",  bodyParser.urlencoded(), (req,res) => {
  res.json(req.body)
  console.log(req.body)
})



app.listen(5000)