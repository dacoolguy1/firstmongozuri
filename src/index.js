const express = require('express');
const { json } = require("express");

const connect = require('./config/database');
const taskRoute = require('./router/todoRoute');
connect();

// lets initialize it
const app = express();
app.use(json())

app.use("/task", taskRoute);

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send("Zuri training on MognoDB");
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})