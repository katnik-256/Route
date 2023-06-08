const express = require('express');
const path = require('path');

//initiating app
const app = express();
const port = 3000;



//setting a static folder
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});


  
  
  

app.listen(port,() =>(
  console.log(`server is running on port ${3000}`)
));
