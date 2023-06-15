const Pessoa = require('../models/person')

function createView(req, res){
    res.render("person/create.html", {});
}

function createUser(req, res){
    let person = {
        nome: req.body.name,
        cpf: req.body.cpf,
        data_nasc: req.body.date_nasc,
        telefone: req.body.phone,
        endereco: req.body.address,
        cep: req.body.cep
    }
    
    Pessoa.create(person).then((result)=>{
        res.render("person/cadastrar.html", {person});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("person/cadastrar.html", {erro});
    })
}

module.exports =  {
    createView,
    createUser
};