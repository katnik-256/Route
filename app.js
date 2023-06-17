const express = require('express');
const path = require('path');

//importing routes
const userRoute = require('./routes/User');
const loginRoute = require('./routes/login');

app.use("/user",userRoute);
app.use("/login",loginRoute);




//initiating app
const app = express();
const port = 3000;



//setting a static folder
app.use(express.static(path.join(__dirname,'public')));




  
  
  

app.listen(port,() =>(
  console.log(`server is running on port ${3000}`)
));
