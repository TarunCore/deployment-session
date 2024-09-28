const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');
app.use(cors());

app.use(express.json());
// app.use(express.static('public'));

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send HTML file
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log("username", username);
    console.log("password", password);
    res.send('Login Success!');
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});