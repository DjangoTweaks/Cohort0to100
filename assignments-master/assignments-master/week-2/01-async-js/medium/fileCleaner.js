var fs= require('fs');

//read a file

// remove spaces

// write the file back.

let stringData=""; 

function readFileFunction(anyCallbackFunction)
{
fs.readFile("aa.txt", "utf-8", function(err,data)
{

    stringFixer(data);

});
}

function stringFixer(data)
{
    console.log("Previous string was", data);

    data = data.replace(/\s+/g, ' ');

    console.log("Fixed String is, ", data);    
}



readFileFunction(stringFixer);







