module.exports = {
    authenticated: function(req, res, next) {
        if(req.isAuthenticated()){
            return next()
        }
        console.log("Faça login")
        res.redirect('/users/login')
    }
}