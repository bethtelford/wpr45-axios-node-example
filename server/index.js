const express = require('express');
const PORT = 4000;
const ctrl = require('./controllers/mainController.js');

const app = express();

app.use(express.json());

app.get('/api/todos', ctrl.getAll)

app.post('/api/todo', ctrl.createOne)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))