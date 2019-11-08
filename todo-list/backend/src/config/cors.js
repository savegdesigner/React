module.exports = function(req, res, next) {

    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELTE')
    res.header('Acces-Control-Allow-Headers', 'ORIGIN, X-Requested-With, Content-Type, Accept')
    next()
}