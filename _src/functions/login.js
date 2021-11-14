const axios = require('axios');
require("dotenv").config();

exports.handler = async function (event, context) {
  const { password } = new URLSearchParams(event.body);

  const endpoint = `${process.env.URL}/.netlify/identity/token`;

  const data = new URLSearchParams({
    grant_type: 'password',
    username: process.env.LOGIN_EMAIL,
    password: password,
  }).toString();

  const options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const response = await axios.post(endpoint, data, options);
    const access_token = response.data.access_token;

    return {
      statusCode: 302,
      headers: {
        'Set-Cookie': `nf_jwt=${access_token}; Path=/; HttpOnly; Secure`,
        'Cache-Control': 'no-cache',
        Location: '/projects/private',
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 302,
      headers: {
        'Cache-Control': 'no-cache',
        Location: `/login/?redirect=${encodeURIComponent(redirect)}`,
      },
    };
  }
};
