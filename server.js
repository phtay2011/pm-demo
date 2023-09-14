const http = require("http");

const tweets = ["tweet1", "tweet2", "tweet3"];

//create a server object:
const server = http.createServer((request, response) => {
  console.log("Request", "Method: " + request.method, "URL: ", request.url);

  // if a post request make a new tweet
  if (request.method === "POST") {
    //extract data
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    request.on("end", () => {
      console.log(body);
      const args = body.split("&");
      response.end("ok");
    });

    // const tweet = "Tweet" + request.url;
    // tweets.push(tweet);
    // response.write(tweet);
    // response.end();
  }

  const tweetString = JSON.stringify(tweets);
  console.log("got a request", request.url);
  //   response.write("<html><head></head><body><h1>Hello</h1></body></html>");
  response.write(`
  <html>
    <head>
    <meta name='floop'>
    </head>
    <body>
        <style>    
    main{
        background-color: blue
    }
        </style>    
    <main>
    <h1>Hello</h1>
    ${JSON.stringify(tweetString)}
    </main>
    <form action="" method="POST"> 
      <input type="text" name="tweet" id="name" placeholder="tweet"/>
      <input type="text" name="author" id="name" placeholder="author"/>
      <input type="text" name="mood" id="name" placeholder="mood"/>
      <input type="submit" value="Subscribe!" />
    </form>

    </body>
    <script>
        const hello =document.querySelector("h1")
        hello.onclick =() => {
            alert('hello')
        }
    </script>
</html>
  `);
  response.end();
});

server.listen(3000);
