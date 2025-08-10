// server.js
require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());

// routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Sequelize + Express API is running'));

// connect & sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
    // sync models - in dev use { force: true } or { alter: true } carefully
    await sequelize.sync(); 
    console.log('Models synced.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to DB:', err);
    process.exit(1);
  }
})();
