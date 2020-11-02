// IMPORTS
const express       = require('express');
const mongoose      = require('mongoose');
const cors          = require('cors');
const favicon       = require('serve-favicon');
const path          = require('path');
const bodyParser    = require('body-parser');
require('dotenv/config');

const app = express();

// MIDDLESWARES
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(cors());

// IMPORT ROUTES
const questionsRoutes = require('./routes/questions');
const userRoutes = require('./routes/users');

app.use('/questions', questionsRoutes);
app.use('/users', userRoutes);

// ROOT ROUTES
app.get('/', (req, res) => {
    res.send('Hallo, das ist das Backend des Mentor Chatbots!');
});

// OPTIONS
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, options)
    .then(() => console.log('Connection to MongoDB Successful!'));

//Starting the server
let port = process.env.PORT || 7125;
let server = app.listen(port, () => {
    console.log('We are live on port: ' + port);
});
