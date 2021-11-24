const express = require('express');

const app = express();

app.get('/locations', (request, response) => {
    return response.json([
        'Mar',
        'Rio'
    ]);
});

app.post('/player/create', (request, response) => {
    return response.json([
        'Mar',
        'Rio'
    ]);
});

app.put('/player/{:id}', (request, response) => {
    return response.json([
        'Mar',
        'Rio'
    ]);
});

app.listen(3333);