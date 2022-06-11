
//CREATING A SIMPLE WEBSITE USING SERVER AND PORT NUM

/*const httpee = require('http');
const server = httpee.createServer((req, res) => {
    console.log(req);
    res.write("ding dong bing bong");
    res.end("!");
})

server.listen(5000);
*/


// USING A BUILT IN NODE MODULE

/*
const ding = require('lodash');
const s = [1,[2,[3,[4]]]];
const f = ding.flattenDeep(s);
console.log(f, "changes made");
*/

// SIMPLE EVENT LOOP EXPLAINATION


//const {readFile} = require('fs');
/*

console.log("started first task");

readFile("./content/textFile1", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");

} );

console.log("starting second task");
*/

/*
const test = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, result) => {
            if (err) {
                reject(err);
            }
            
            resolve(result);
        })
    }
)};

test("./content/textFile1").then((result) => console.log(result)).catch((err) => console.log(err));
console.log("run second");
*/
//const http = require('http');
//const server = http.createServer();

//const eventEmitter = require('events');
//const myEmitter = new eventEmitter();

//WE CAN DO THIS DIRECTLY FROM HTTP MODULE THINGIE BCS HTTP MODULE EXTENDS EVENT MODULE
//"request" BELOW IS A KEYWORD
/*
server.on("request", (req, res) => {
    res.end("hello");
});

server.listen(5000);

server.emit("req");

*/

// MAKE WEBPAGES AND USING RES WITH STATUS CODES. 
// UNCOMMENT LINE 61 i.e const http = require('http'); FOR THIS TO RUN

/*
const server2 = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/" || url === "/home"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>Home page</h1>");
        res.end();
    }
    else if (url === "/miru") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>Mir hamza page</h1>");
        res.write("<h2>Please come dota brother.</h2>")
        res.end();
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.write("<h1>Oopsie daisy, page not found</h1>");
        res.end()
    }
    }
)

server2.listen(7000);

*/

//EXPRESS FUNCTIONALITY STARTS

const express = require("express");
const path = require("path");
const app = express();


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use (used for middleware)
//app.listen


/*
app.get("/", (req,res) => {
    res.status(200).send("home page");
})

app.get("/about", (req,res) => {
    res.status(200).send("about page");
})

app.get("/download", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./content/simpleHttp"));
})

app.all("*", (req,res) => {
    res.status(404).send("<h1>Resource not found oopsie</h1>");
})

*/

//setup static and middleware
//app.use(express.static("./public"));

const {products} = require("./data")


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><a href = /api/data>Products</a>");
})

//COLON IN THE 3RD PART OF URL IS THE ROUTE PARAM

app.get("/api/data/:productID", (req, res) => {
        const {productID} = req.params; 
        const singleProduct = products.find((product) => product.id === Number(productID));

        if(!singleProduct) {
            return res.status(404).send("Product Does Not Exist!");
        }
        res.json(singleProduct);
    })

    //FRO WHAT I CAN TELL THIS IS JUST ROUTE PARAMS
    //BUT WE CAN GIVE UNLIMITED QUERY PARAMS IN THE REQ URL
    //url format: /api/v1/query?id=2&name=saad

app.get("/api/v1/query", (req, res) => {
    console.log(req.query);
    res.send("za worldo");
    
})

    



app.all("*", (req,res) => {
    res.status(404).send("<h1>Resource not found oopsie</h1>");
})


app.listen(5000, () => {
    console.log("server is listening on port 5000...")
})



