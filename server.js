const express = require('express')
const mongoose = require("mongoose")
const routes = require("./routes")

// const bodyParser = require('body-parser')
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/w5";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


//app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, function(){
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}`)
})