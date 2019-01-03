var express = require("express"),
    app = express(),
    port = process.env.PORT || 8081,
    bodyParser = require('body-parser');
    
    
var todoRoutes = require("./routes/todos");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
    
app.get('/', function(req, res){
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);

    
app.listen(port,function(){
    console.log("APP IS RUNNING AT PORT: " + port);
});