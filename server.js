require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const helmet  = require('helmet')
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cors());
// app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


const etfs = require('./routes/etfs')
const symbol  = require('./routes/symbol')
const login  = require('./routes/login')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async (result) => {
    console.log("CONNECTED TO MONGODB")
    app.listen(PORT, () => { console.log(`listing to port ${PORT}`) })
  })
  .catch(err => console.log(err))

app.use('/api/etfs', etfs);
app.use('/api/symbol', symbol);
app.use('/api/login', login);



