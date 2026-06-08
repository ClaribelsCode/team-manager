require('dotenv').config(); //reading .env and getting variables
const express = require('express');  //controller
const { Pool } = require('pg'); //importing Pool class 
const cors = require('cors'); //Cross origin resource sharing

const app = express();
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

//asks PostgreSQL for the current time
pool.query('SELECT NOW()', (err,res) => {
    if (err){
        console.error('Databse connection failed: ', err);
    } else {
        console.log('Database connected sucessfully',res.rows[0]);
    }
});

//Telling Express "if someone asks for a test, do this"
app.get('/test', (req, res) => {
    res.send('Express is working!');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});