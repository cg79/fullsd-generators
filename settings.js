
const smtpSettings = {
  fullsd: {
    from: 'office@fullsd.com',
    host: 'ran.gazduire.ro',
    port: 465,
    secure: true,
    auth: {
      user: 'office@fullsd.com',
      pass: 'Q!8EGysxewd2ENEhjf4yBZum4l63',
    },
    tls: {
      rejectUnauthorized: true,
    },
  },
};

module.exports = smtpSettings;
