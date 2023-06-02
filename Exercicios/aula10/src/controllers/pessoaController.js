const Pessoa = require('../models/pessoa')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarPessoa(req, res){
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.render("pessoa/cadastrar.html", {pessoa});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", {erro});
    })
}

function listarView(req, res){
    Pessoa.findAll().then((pessoas)=>{
        res.render("pessoa/listar.html", {pessoas});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function(pessoa){
        res.render("pessoa/editar.html", {pessoa});
    })
}

function editarPessoa(req, res) {
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pessoa.update(
      pessoa,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });
}

function excluirView(req, res){
    let id = req.params.id
    let pessoaExcluida
    Pessoa.findByPk(id).then((pessoaExcluida)=>{
        res.render("pessoa/excluir.html", {pessoaExcluida});
    })
}

function excluirPessoa(req, res) {
    let pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pessoa.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/excluir.html", {sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/excluir.html", {erro})
    });
}


module.exports =  {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    excluirView,
    excluirPessoa
};