const Joi = require('@hapi/joi');

const login = {
  auth: false,
  tags: ['api', 'authentication'],
  validate: {
    payload: Joi.object({
      username: Joi.string().required().lowercase().label('Username'),
      password: Joi.string().required().label('Password')
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

const logout = {
  tags: ['api', 'authentication'],
  handler: () => {
    // write your handler function here
  }
};

const forgotPassword = {
  auth: false,
  tags: ['api', 'authentication'],
  validate: {
    payload: Joi.object({
      email: Joi.string().required().lowercase().label('Email')
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

const resetPassword = {
  auth: false,
  tags: ['api', 'authentication'],
  validate: {
    payload: Joi.object({
      newPassword: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/).required().label('New Password'),
      confirmNewPassword: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/).required().label('Confirm New Password'),
      resetToken: Joi.string().required().label('Reset Token')
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

const changePassword = {
  tags: ['api', 'authentication'],
  validate: {
    payload: Joi.object({
      oldPassword: Joi.string().required().label('Old Password'),
      newPassword: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/).required().label('New Password'),
      confirmNewPassword: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/).required().label('Confirm Password')
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

const validateSession = {
  auth: false,
  tags: ['api', 'authentication'],
  validate: {
    params: Joi.object({
      token: Joi.string().required()
    }),
    failAction: (req, h, err) => err
  },
  handler: () => {
    // write your handler function here
  }
};

exports.routes = [{
  method: 'POST',
  path: '/login',
  config: login
},
{
  method: 'DELETE',
  path: '/logout',
  config: logout
},
{
  method: 'POST',
  path: '/forgotPassword',
  config: forgotPassword
},
{
  method: 'POST',
  path: '/resetPassword',
  config: resetPassword
},
{
  method: 'PUT',
  path: '/v1/changePassword',
  config: changePassword
},
{
  method: 'GET',
  path: '/validateSession/{token}',
  config: validateSession
}
];
