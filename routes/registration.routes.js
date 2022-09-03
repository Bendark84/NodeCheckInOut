const express = require('express');

//Controllers

const {
  getAllRegistration,
  getOneRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registration.controller');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegistration);
registrationRouter.get('/:id', getOneRegistration);
registrationRouter.post('/', createRegistration);
registrationRouter.patch('/:id', updateRegistration);
registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
