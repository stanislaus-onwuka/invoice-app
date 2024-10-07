const admin = require('firebase-admin');
const serviceAccount = require('./invoice-app-a7a5b-firebase-adminsdk-frei3-752b2cbd8b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
