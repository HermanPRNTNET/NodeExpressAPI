// import express from 'express';
// import bodyParsers from 'body-parser';
// import usersRoutes from './routes/users.js';

// const express = require("express");

// const db = require('./models');
// import db from './models/index.js';

const express = require("express");
const bodyParser = require("body-parser");
// const usersRoutes = require("./routes/users");
const db = require("./models");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// app.use('/users',usersRoutes);
app.use('/users',require("./routes/users"));


db.sequelize.sync().then((req) => {
    app.listen(PORT, () => console.log(`server Running on port : http://localhost : ${PORT}`));
});
