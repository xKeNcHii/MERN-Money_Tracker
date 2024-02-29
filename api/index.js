const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/transactions');
const mongoose = require('mongoose');
const app = express();



app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('Hello World');
});

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime } = req.body;
    const transaction = await Transaction.create({ name, description, datetime });
    res.json(transaction);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});