const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const docs = require('./swagger.json');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));


mongoose.connect('mongodb+srv://quanganh04012000:1781516590@cluster0.giulr.mongodb.net/test', () =>{
    console.log("Connected to DB");
})

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hello World, from express");
});

require('./app/routes')(app);

app.listen(PORT, ()=> {
    console.log( `Hello world app listening on port ${PORT} with url http://localhost:${PORT}`);
});