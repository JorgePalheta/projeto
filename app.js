//carregando modulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")
const { error } = require("console")
const session = require("express-session")
const flash = require("connect-flash")

//configuração
    //sessão
    app.use(session({
        secret: "jorge",
        resave: true,
        saveUninitialized: true
    }))
    app.use(flash())
    //middleware
    app.use((req, res, next)=>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })
    //bodyparser
    app.use(bodyparser.urlencoded({extended: true}))
    app.use(bodyparser.json())
    //handlebars
    app.engine("handlebars", handlebars.engine({default:'main'}))
    app.set("view engine", "handlebars")
    //tentar mongoose
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://127.0.0.1/blogapp").then(()=>{
        console.log("entrou")
    }).catch((erro)=>{
        console.log("erro" + erro)
    })
    
    //public
    app.use(express.static(path.join(__dirname,"public")))
//rota
    app.use("/admin", admin)
//outros
const PORT = 8081
app.listen(PORT, function(){
    console.log("servidor rodando")
})