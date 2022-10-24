const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');
const PUBLICFOLDER = path.resolve('public')
app.use(express.static(PUBLICFOLDER))


app.listen(3000, ()=>{
    console.log('Servidor funcionando en el servidor 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('views/register.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve('views/login.html'))
})
