const http = require('http');

const port = process.env.PORT || 2000;
const app = require("./app")
const server = http.createServer(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.listen(port,()=>{
    console.log("server ");
});




