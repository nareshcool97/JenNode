//importing node framework
var express = require('express');
 
let app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', (req, res) => {
 res.send('hello world');
});

app.get('/hello', (req, res) => {
    res.send('hello world!');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;