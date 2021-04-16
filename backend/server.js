const express = require('express');
const app = express();
const db = require('./src/config/mongodb');

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8082;

require('./src/routes')(app);

app.listen(port);
console.log(`Magic happens on port ${port}`);
