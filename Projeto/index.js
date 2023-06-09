const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const db = require('./src/db')

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'secret-token',
    name: 'sessionId',  
    resave: false,
    saveUninitialized: false
}))

// Define as rotas da aplicação (declaradas na pasta /src/routes/)
app.use('/', require('./src/routes/indexRoutes'));
app.use('/', require('./src/routes/authRoutes'));

app.use('/', require('./src/routes/personRoutes'));
app.use('/', require('./src/routes/accountRoutes'));

db.sync(() => console.log(`Database connected`));

const app_port = 8000
app.listen(app_port, function () {
    console.log('app running on port ' + app_port)
})
