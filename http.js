const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
  } else if (req.url === "/about") {
    res.end("Welcome to your about page");
  } else {
    res.end(`
      <h1>Oops</h1> 
      <p>Something went wrong</p> 
      <a href="/">Go back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
