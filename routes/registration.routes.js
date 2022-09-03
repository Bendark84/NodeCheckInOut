const express = require('express');

//Controllers

const {
  getAllRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registration.controller');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegistration);
registrationRouter.post('/', createRegistration);
registrationRouter.patch('/:id', updateRegistration);
registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
