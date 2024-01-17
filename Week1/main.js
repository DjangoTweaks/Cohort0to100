const fs = require("fs"); //file system module 

fs.readFile("a.txt", "utf-8", function(err,data) {
    console.log(data);
});