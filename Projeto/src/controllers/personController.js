const Pearson = require('../models/person')

function createView(req, res){
    res.render("person/create.html", {});
}

function createPerson(req, res){
    let person = {
        name: req.body.name,
        cpf: req.body.cpf,
        birth_date: req.body.birth_date,
        phone: req.body.phone,
        address: req.body.address,
        cep: req.body.cep
    }
    
    Person.create(person).then((result)=>{
        res.render("person/create.html", {person});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("person/create.html", {error});
    })
}

function readView(req, res){
    Person.findAll().then((people)=>{
        res.render("pearson/read.html", {people});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("pearson/read.html", {error});
    })
}

function updateView(req, res){
    let id = req.params.id
    let pearson;
    Pearson.findByPk(id).then(function(pearson){
        res.render("pearson/update.html", {pearson});
    })
}

function updatePearson(req, res) {
    let pearson = {
        name: req.body.name,
        sobrename: req.body.sobrename,
        cpf: req.body.cpf,
    }
    Pearson.update(
      pearson,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pearson/update.html", {pearson, sucesso});
    })
    .catch(function (error) {
        res.render("pearson/update.html", {pearson, error})
    });
}

function deleteView(req, res){
    let id = req.params.id
    let pearsonExcluida
    Pearson.findByPk(id).then((pearsonExcluida)=>{
        res.render("pearson/delete.html", {pearsonExcluida});
    })
}

function deletePearson(req, res) {
    let pearson = {
        name: req.body.name,
        sobrename: req.body.sobrename,
        cpf: req.body.cpf,
        email: req.body.email,
        phone: req.body.phone,
        altura: req.body.altura,
        peso: req.body.peso
    }
    Pearson.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pearson/delete.html", {sucesso});
    })
    .catch(function (error) {
        res.render("pearson/delete.html", {error})
    });
}

module.exports =  {
    createView,
    createPerson,
    readView,
    updateView,
    updatePearson,
    deleteView,
    deletePearson
};