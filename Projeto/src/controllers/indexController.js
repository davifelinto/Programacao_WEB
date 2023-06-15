function indexView(req, res){
    pessoa = req.session.person
    res.render("index.html", {person});
}

module.exports =  {
    indexView,
};