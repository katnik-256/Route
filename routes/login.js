const express = require('express');
const router = express.Router();




// Define routes for login
router.get('/index', (req, res) => {
  // Handle GET request for /login
  res.sendFile(__dirname + '/public/index.html');
});

router.post('/index', (req, res) => {
  // Handle POST request for /login
  const username = req.body.username;
  const password = req.body.password;
// performing authentication/////////////////////////////////
if (username === 'admin' && password === 'password') {
  // Successful login
  res.send('Login successful!');
} else {
  // Failed login
  res.send('Invalid credentials. Please try again.');
}

});

// Export the router
module.exports = router;