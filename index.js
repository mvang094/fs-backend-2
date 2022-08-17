const express = require('express');
const cors = require('cors');
const ctrl = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getHouses,
    deleteHouses,
    createHouses,
    updateHouses
} = ctrl;

app.get('/api/houses', getHouses);
app.delete('/api/houses/:id', deleteHouses);
app.post('/api/houses', createHouses);
app.put('/api/houses/:id', updateHouses);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`Server is listening on ${SERVER_PORT}`));