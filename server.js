const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const items = require('./routes/api/items');

const app = express();

// bodyparse middleware
app.use(bodyParser.json());
// TO DO: set up db on Mlab and get keys
//DB Config 
const db = require('./config/keys').mongoURI;

//Connect to mongo db

mongoose
    .connect(db)
    .then(()=> console.log('Mongo DB is connected'))
    .catch(err=>console.log(err));

//using routes

app.use('/api/items',items);

const port = 5000; // for heroku process.env.PORT || 

app.listen(port, ()=> console.log(`Server started on port: ${port}`));

