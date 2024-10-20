const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like index.html, CSS, JS) from 'Home-Page' folder
app.use(express.static(path.join(__dirname, 'Home-Page')));
app.use(express.static(path.join(__dirname, 'local-attractions')));

// app.use(express.static(path.join(__dirname, 'images')));



app.set('view engine', 'ejs');

const attractionsRoutes = require('./local-attractions/attractionsRoutes');
app.use(attractionsRoutes);


// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home-Page', 'index.html')); // Serve index.html as static file
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
