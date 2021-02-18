import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 3000;

//mongo connection
//this allows us to use a promise to connect to mongo
////the promise will expect a reponse before it says it succeeded or not
mongoose.Promise = global.Promise;
//this syntax connects us
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser:true,
    useUnifiedToplogy: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}))//this allows us to pass the request and encoded it properly to use it
app.use(bodyparser.json());


routes(app);

app.get('/', (req, res) =>
    res.send(`Our Soccer application is running on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Your soccer serer is running on port ${PORT}`)
)