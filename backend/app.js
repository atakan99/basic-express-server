//create a basic express server with hello world in the main route

const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
const {errorHandler} = require('./middleware/errorMiddleware');
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/userForm', require('./routes/userFormRoutes'));

app.use(errorHandler);

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)});







