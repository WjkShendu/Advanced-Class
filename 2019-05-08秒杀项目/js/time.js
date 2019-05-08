const http = require("http");

const server = http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*")

//	const date = new Date();
//	date.setDate(date.getDate() + 7);
	var ster = "2019/5/8 21:16:40";
	res.end(JSON.stringify(new Date(ster).getTime()))
});

server.listen(8888);
