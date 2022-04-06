const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:kanai2005@fiaptecnico.5oane.mongodb.net/ac1')
    //conexao atlaas
    var atlas = await mongoose.connect('mongodb+srv://useradm:kanai2005@fiaptecnico.qpr8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

module.exports = conexao