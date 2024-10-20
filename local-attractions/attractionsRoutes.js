const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Hemanth@115329', 
    database: 'OdishaDarshan' 
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// router.get('/', (req, res) => {
//     res.render('index');  // Render local attractions page
// });


// Add a new search route to handle search requests
router.get('/search', (req, res) => {
    const city = req.query.city; // Get the search query from the form

    // SQL query to retrieve attractions based on the city
    const sql = 'SELECT * FROM attractions WHERE city = ?';

    // Query the database
    db.query(sql, [city], (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            return res.status(500).send('Internal Server Error');
        }

        // If attractions are found, render a page showing the results
        if (results.length > 0) {
            res.render('local-attractions', { attractions: results, city: city });
        } else {
            // If no attractions found, show a message
            res.render('no-results', { city: city });
        }
    });
});

module.exports = router; //Exports the router object so it can be used in server.js
