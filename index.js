let express = require('express');

let app = express();

app.use(express.json());

app.use(express.static(__dirname + '/public'))





app.listen(4001, ()=>{console.log('server up on port 4001')});


