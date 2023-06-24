const express = require('express');
const bcrypy = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');



// Import route files
const userRoutes = require('./routes/user.js');
const loginRoutes = require('./routes/login.js');

//initiating app
const app = express();
const port = 3000;


// Use the route files
app.use('/user', userRoutes);
app.use('/login', loginRoutes);





//setting a static folder
app.use(express.static(path.join(__dirname,'public')));


// Define the login route
app.get('/index', (req, res) => {
  res.sendFile('index.html');
});

  
  
  

app.listen(port,() =>(
  console.log(`server is running on port ${3000}`)
));
