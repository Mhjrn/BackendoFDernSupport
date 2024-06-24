const user = require("./user.routes")
const login = require("./login.routes")
const product = require("./product.routes")
const post = require("./post.routes")
const repair = require("./repair.routes")
const inquiry = require("./inquiry.routes")
const checkauth = require("../middleware/checkauth")
function loadRoutes(app){
    //express, method, url, middleware(options), controller or callback function
    app.use('/register',user)   
    app.use('/login',login)
    app.use('/product',product)
    app.use('/post',post)
    app.use('/repair',checkauth,repair)
    app.use('/inquiry',inquiry)
}


module.exports = loadRoutes;
