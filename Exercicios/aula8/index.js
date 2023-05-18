// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

var express = require('express')
var mustacheExpress = require('mustache-express')
var bodyParser = require('body-parser')
var app = express()

var erro = false
var dados = {}
var motivo = ''

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname+'/views')
app.use(bodyParser.urlencoded({extended: true}))

app.get('', function(req, res){
    let pessoa = {nome: 'Pessoa'}
    res.render('index.html', {pessoa})
})

app.get('/form', function(req, res){
    if(erro){
        res.render('newForm.html', {erro, motivo})
    }else{
        res.render('newForm.html')
    }
})

app.get('/result', function(req, res){
    res.render('result.html', {dados})
})

app.post('/register', function(req, res){
    dados = req.body     
    // Iteração pelo objeto
    erro = false
    for (const campo in dados) {
        if (dados[campo] == '') {
            erro = true
            motivo = campo
            break
        }
    }
    if(erro){
        res.redirect('/form')
    }else{
        res.redirect('/result')
    }
})

const app_port = 8000
app.listen(app_port, function(){
    console.log('app rodando na porta ' + 'http://127.0.0.1:' + app_port)
})