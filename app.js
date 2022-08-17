//create a basic express server with hello world in the main route

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.get('/', (req, res) => 
{
    res.status(500).json({'message':'error'})
});





