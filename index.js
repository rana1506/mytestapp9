var http=require('http');

function onRequest(request,response)
{
	console.log("hello worlddddd");
	response.write("hello world")
	response.end()
}
http.createServer(onRequest).listen(3000);