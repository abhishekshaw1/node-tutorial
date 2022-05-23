const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("welcome to home page");
        res.end();
    }
   else if(req.url === "/about"){
    res.write('welcome to our about page');
    res.end();
   }
    else {
        res.write(
            `<h1>opss !! </h1> <p>we cannot find the page that you are looking for , Please click here to go back to home page</p> <a href="/">Home page</a>`)
            res.end();
    }
})

server.listen(5000);