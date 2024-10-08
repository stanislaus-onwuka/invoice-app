const authenticate = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (idToken) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).send('Unauthorized');
    }
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authenticate