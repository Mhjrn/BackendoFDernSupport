const user = require("./user.routes")
const login = require("./login.routes")

function loadRoutes(app){
    //express, method, url, middleware(options), controller or callback function
    app.use('/register',user)   
    app.use('/login',login)
}

module.exports = loadRoutes;
