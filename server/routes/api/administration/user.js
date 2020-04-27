const Joi = require('@hapi/joi');

const register = {
  auth: false,
  tags: ['api', 'user'],
  validate: {
    payload: Joi.object({
      firstName: Joi.string().required().lowercase().trim().label('Name'),
      lastName: Joi.string().required().trim().label('Display Name'),
      email: Joi.string().email().required().lowercase().trim().label('Email'),
      mobile: Joi.string().required().trim().label('Mobile'),
      password: Joi.string().required().trim().label('Mobile'),
      confirmPassword: Joi.string().required().trim().label('Mobile')
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

exports.routes = [
  {
    method: 'POST',
    path: '/register',
    config: register
  }
];
