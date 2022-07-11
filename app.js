const express = require('express')

var app = express()

app.listen()

app.use('/',express.static('./public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'public/html/index.html'))
})
app.listen(3000, (req, res) =>{
    console.log("Listen at port 3000")
})