const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    nome: {
        type:String
    }

},{timestamps:true})

module.exports = mongoose.model('Item',ItemSchema)