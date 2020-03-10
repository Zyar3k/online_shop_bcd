const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/api/products', (req, res) => {
  res.json(console.log('=> api products'));
});

app.listen(config.port, function () {
  console.log(`Server is running on port: `, config.port);
  console.log(`Happy coding`);
});