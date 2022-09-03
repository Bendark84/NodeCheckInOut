const express = require('express');

//Router
const { registrationRouter } = require('./routes/registration.routes');

const app = express();

app.use(express.json());

//EndPoints

app.use('/api/v1/registration', registrationRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
