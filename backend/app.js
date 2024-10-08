const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const admin = require('firebase-admin');
const authenticate = require('./middleware/authMiddleware');
const mockData = require("./data/invoices")

const app = express();
const serviceAccount = require('./invoice-app-a7a5b-firebase-adminsdk-frei3-752b2cbd8b.json');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


// Get all invoices
app.get('/api/invoices', authenticate, (req, res) => {
  res.json(mockData);
});

// Get single invoice
app.get('/api/invoices/:id', authenticate, (req, res) => {
  const item = mockData.find(d => d.id === parseInt(req.params.id, 10));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Recent activity 
app.post('/api/invoices', authenticate, (req, res) => {
  const newItem = { id: mockData.length + 1, ...req.body };
  mockData.push(newItem);
  res.status(201).json(newItem);

  // Broadcast the new data to all connected WebSocket clients
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(mockData));
    }
  });
});

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.send(JSON.stringify(mockData));

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
