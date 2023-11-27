const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    });
app.post('/api/products', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.json({ message: 'Success' });
    });

app.listen(6000, () => console.log('Server listening on port 6000'));
    