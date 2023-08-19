require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api/users', verifyToken, userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});