// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;

// Database Connection


// Routes & Controllers
app.get('/new', (req, res) => {
    res.send('new');
})

//===App Listener===//
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));
