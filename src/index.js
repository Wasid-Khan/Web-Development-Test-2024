const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const authMiddleware = require('./middleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/protected', authMiddleware.verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
