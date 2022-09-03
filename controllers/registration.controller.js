const { Registration } = require('../models/registration.model');

const getAllRegistration = async (req, res) => {
  try {
    const register = await Registration.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'Register not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegister = await Registration.create({ entranceTime });
    res.status(201).json({
      status: 'success',
      data: { newRegister },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { entranceTime, exitTime } = req.body;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'Register not found',
      });
    }

    await register.update({ entranceTime, exitTime });

    res.status(200).json({
      status: 'success',
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'Register not found',
      });
    }

    await register.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistration,
  getOneRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
