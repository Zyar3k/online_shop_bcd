const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api', productRoutes);



mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => console.log('Wow!! You\'re connected to the database!'));
db.on('error', (error) => console.log('Error ' + error));


app.listen(config.PORT, function () {
  console.log(`Server is running on port: `, config.PORT);
  console.log(`Happy coding`);
});