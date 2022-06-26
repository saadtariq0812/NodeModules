
//CREATING A SIMPLE WEBSITE USING SERVER AND PORT NUM

/*const httpee = require('http');
const server = httpee.createServer((req, res) => {
    console.log(req);
    res.write("ding dong bing bong");
    res.end("!");
})

server.listen(5000);
*/

// WHEN YOU ARE EMITTING AN EVENT IN A DIFF MODULE AND LISTENING FOR IT IN ANOTHER
//ALWAYS PUT THE EMITTER FUNC INSIDE A CLASS AND THEN EXPORT THAT CLASS.
//THIS IS BCS THE BUILT-IN MODULE 'REQUIRE' CONSIDERS BOTH EVENT EMITTER OBJECTS IN THE DIFF MODULES TO BE DIFF 
//EVEN WITH SAME NAME.

/*
const EventEmitter = require('events');
const emitter = new EventEmitter();
this emiiter object is not needed anymore when using class^


class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit("messageLogged", {id : 1, url : 'http://'});

    }
}

module.exports = Logger;

app.js code below now



const Logger = require('./logger')
const logger = new Logger()   bcs we exported a class

logger.on('messageLogged' (args) => {
    console.log('Listener Called', args);
})
logger.log('message');
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
// this is a built in express middleware fnc .static
//app.use(express.static("./public"));

/*
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

    //FRO WHAT I CAN TELL THIS IS JUST QUERYING AND CUTTING DOWN SEARCH SPACE
    //WE CAN GIVE UNLIMITED QUERY PARAMS IN THE REQ URL
    //url format: /api/v1/query?id=2&name=saad
    //note: query is NOT a keyword here

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

*/

// req => middleware => res
// unless youre terminating whole cycle middleware
//needs to pass it on to next middleware


/*
const loggerMiddlewareFunc = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

//app.use("/api", loggerMiddlewareFunc) 
//this will apply middleware to any path that has /api before it
app.use(loggerMiddlewareFunc); //will call this func 
//for any route. here it works for about as well
//even though there is no middleware.

app.get("/", loggerMiddlewareFunc, (req, res) => {
    res.send("Home Page");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

//ADDITIONAL SYNTAX FOR app.use()

//app.use([fucn1, func2]); run 2 middleware funcs

*/

const products = require("./data");
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
})

app.listen(5000, () => {
    console.log("server is listening on port 5000...")
})