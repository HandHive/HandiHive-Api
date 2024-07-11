const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnect = require('./configs/database');
const morgan = require('morgan');
const session = require('express-session');
const routes = require('./routes/index')

dotenv.config();
dbConnect();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})