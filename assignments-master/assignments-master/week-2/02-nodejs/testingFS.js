const { error } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();



function readFileFunction(callBackFunction)
{
  fs.readFile("./files/a.txt", "utf-8", function(err,data)
  {
    callBackFunction(data);
  });
}

function passingThrough(data)
{
  console.log(data);
}

readFileFunction(passingThrough);  

