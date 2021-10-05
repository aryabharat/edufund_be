const mongoose = require('mongoose');

const sybEtfsSchema = mongoose.Schema({
    symbol_name:{
        type: String,
        require: true
    },
    data:[{
        Date:{
            type: String,
            require: true
        },
        Open:{
            type: String,
            require: true
        },
        High:{
            type: String,
            require: true
        },
        Low:{
            type: String,
            require: true
        },
        Close:{
            type: String,
            require: true
        },
        Volume:{
            type: String,
            require: true
        }
    }]
}, {
    timestamps: true
})


module.exports = mongoose.model('syb_etfs', sybEtfsSchema);