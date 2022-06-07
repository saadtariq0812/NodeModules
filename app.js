
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


const {readFile} = require('fs');
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

