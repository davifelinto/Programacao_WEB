var express = require('express')
var mustacheExpress = require('mustache-express')
var bodyParser = require('body-parser')
var app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname+'/views')
app.use(bodyParser.urlencoded({extended: true}))

app.get('', function(req, res){
    let pessoa = {nome: 'Davi'}
    res.render('index.html', {pessoa})
})

app.get('/form', function(req, res){
    res.render('form.html')
})

app.post('/result', function(req, res){
    let dados = req.body
    res.render('/result.html', {dados})
})

app.get('resultado')

const app_port = 8000
app.listen(app_port, function(){
    console.log('app rodando na porta ' + 'http://127.0.0.1:' + app_port)
})