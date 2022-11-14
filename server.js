import express from 'express';
import bodyParser from 'body-parser';

import albumsRoute from './routes/index.js';


const app = express();

app.use('/cover', express.static('./assets'));
app.use('/music', express.static('./music/asake'));
app.use('/music2', express.static('./music/drake'));
app.use('/music3', express.static('./music/dinos'));

const PORT = 5000;

app.use(bodyParser.json());

app.use('/albums', albumsRoute);

app.get('/', (req, res) =>{
    console.log('Test!');

    res.send("Hello it's my mini music API.")
});

//process.env.PORT

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));
