const express = require('express');
const dotenv = require('dotenv');

// Load env vars contained in config file
dotenv.config({
  path: './config/config.env'
});

// Initiallise app with express

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));