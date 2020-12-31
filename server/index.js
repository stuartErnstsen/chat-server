const express = require('express');
const msgctrl = require('./messages_controller');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

// ENDPOINTS
app.get('/api/messages', msgctrl.getMsgs)
app.put('/api/message/:id', msgctrl.editMsg)
app.post('/api/messages', msgctrl.addNewMsg)
app.delete('/api/message/:id', msgctrl.deleteMsg)

const port = 3001;
app.listen(port, () => console.log(`TEST IS WORKING on ${port}`))