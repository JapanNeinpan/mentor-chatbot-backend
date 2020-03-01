const express        = require('express');
const mongoose       = require('mongoose');
const cors           = require('cors');
const bodyParser     = require('body-parser');
require('dotenv/config');

const app = express();

// MIDDLESWARES
app.use(bodyParser.json());
app.use(cors());

// IMPORT ROUTES
const questionsRoutes = require('./routes/questions');
app.use('/questions', questionsRoutes);

// ROUTES
app.get('/', (req, res) => {
    res.send('This is the backend api for the mentor chatbot');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connection to MongoDB Successful!')
);

//Starting the server
app.listen(process.env.PORT || 7125, () => {
    console.log('We are live on port: ' + process.env.PORT);
});
