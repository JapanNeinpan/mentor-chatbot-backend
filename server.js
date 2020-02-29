const express        = require('express');
const mongoose       = require('mongoose');
const cors           = require('cors');
const bodyParser     = require('body-parser');
require('dotenv/config');

const app = express();
const port = 8000;



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
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0-xkgor.gcp.mongodb.net/test?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connection to MongoDB Successful!')
);

//Starting the server
app.listen(port, () => {
    console.log('We are live on port:' + port);
});
