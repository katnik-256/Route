const express = rquire('express');
const router = express.Router();


router.post('/', (req, res) => {
    // Retrieve the sign-up data from the request body
    const { name, email, password } = req.body;
  
    // Perform any necessary validation or data processing
    // ...
  
    // Create a new user in your database or storage
    // ...
  
    // Send a response indicating successful sign-up
    res.status(200).send('You are Welcome');
  });

module.exports = router;