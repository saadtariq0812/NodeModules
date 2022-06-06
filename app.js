/*const httpee = require('http');
const server = httpee.createServer((req, res) => {
    console.log(req);
    res.write("mir hamza is big gay unless he comes for dotu");
    res.end("!");
})

server.listen(5000);
*/

const ding = require('lodash');
const s = [1,[2,[3,[4]]]];
const f = ding.flattenDeep(s);
console.log(f, "changes");