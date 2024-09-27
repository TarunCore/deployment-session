const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');
app.use(cors());

// app.use(express.static('public'));

app.get('/web', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send HTML file
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});