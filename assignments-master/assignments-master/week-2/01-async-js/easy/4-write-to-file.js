const { error } = require('console');
var fs= require('fs');

// goal is to write to a file 

// fs.writeFile( file, data, options, callback )

fs.writeFile("a.txt", "This is a message from the function fs.writeFil1e", error =>{
 if(error)
 {
    console.error(error);
 }   
} );


