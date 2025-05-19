// sendPush.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: 'Hello from Server',
    body: 'This is a test notification',
  },
  token: 'fT8w9VLcTXWcKetgrmow3i:APA91bFWHiy1pNVt6A2J0c_rUR0AmdD_X6rDYM1mM_vI5mIOjbAjasLZlV1-ND1aNkI9vS47AwLrzrdrwyKQ3S-2zHdtYOCWFMO5hu7T_jx5CerdmgOKfgs', 
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log('✅ Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('❌ Error sending message:', error);
  });
