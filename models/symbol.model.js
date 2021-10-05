const mongoose = require('mongoose');

const symbolSchema = mongoose.Schema({
    Security_Name:{
        type: String,
        require: true
    },
    Symbol:{
            type: String,
            require: true
        },
        Test_Issue:{
            type: String,
            require: true
        },
        Round_Lot_Size:{
            type: String,
            require: true
        },
        NextShares:{
            type: String,
            require: true
        },
        NASDAQ_Symbol:{
            type: String,
            require: true
        },
        Market_Category:{
            type: String,
            require: true
        },
        Listing_Exchange:{
            type: String,
            require: true
        },
        Financial_Status:{
            type: String,
            require: true
        },
        ETF:{
            type: String,
            require: true
        },
        CQS_Symbol:{
            type: String,
            require: true
        }
}, {
    timestamps: true
})


module.exports = mongoose.model('symbol ', symbolSchema);
