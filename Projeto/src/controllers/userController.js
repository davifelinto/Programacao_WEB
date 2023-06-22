const User = require('../models/user')

function createView(req, res){
    res.render("user/create.html", {});
}

function createUser(req, res){
    let user = {
        email: req.body.email,
        password: req.body.pwd
    }
    
    User.create(user).then((result)=>{
        res.render("user/create.html", {user});
    }).catch((err) => {
        console.log(err)
        let error = err
        res.render("user/dreate.html", {error});
    })
}

function readView(req, res){
    let success_delete = req.query.success_delete
    let error_delete = req.query.error_delete

    User.findAll().then((users)=>{
        res.render("user/read.html", {users, success_delete, error_delete})
    }).catch((err)=> {
        console.log(err)
        let error = err
        res.render("user/read.html", {error})
    })
}

function updateView(req, res){
    let id = req.params.id
    let user
    User.findByPk(id).then(function(person){
        res.render("user/update.html", {user})
    })
}

function updateUser(req, res){
    let user = {
        email: req.body.email,
        password: req.body.pwd
    }
    User.update(
        user,
        {
            where: {
                id: req.body.id
            },
        }
    ).then(function (success) {
        res.render("user/update.html", {user, success})
    }).catch(function (error) {
        res.render("user/update.html", {user, error})
    })
}

module.exports =  {
    createView,
    createUser,
    readView,
    updateView,
    updateUser
};