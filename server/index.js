const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

env.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
    console.log(" API Endpoint");
    return res.json({
        success: true,
        message: 'Fetched home'
    });
});

// list the routes
const MovieRoutes = require('./routes/movie.routes');


// call the routes
MovieRoutes(app);




app.listen(process.env.PORT, async () => {
    console.log(`Server is running on the port ${process.env.PORT}`);
    
    // database connection
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the Database...");
    } catch (error) {
        console.log("Error while connecting to the Database: ", err);
    }
});


