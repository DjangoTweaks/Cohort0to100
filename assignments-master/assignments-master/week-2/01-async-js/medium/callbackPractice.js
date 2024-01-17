

function square(n)
{
    return n*n;
}

function cube(n)
{
    return n*n*n;
}

function quad(n)
{
    return n*n*n*n;
}

function sumOfSomething(a,b, callbackFunction1, callbackFunction2)
{
    val1= callbackFunction1(a);
    val2= callbackFunction2(b);
    return val1+val2; 
}

let x = sumOfSomething(1,2, quad, cube);

sumOfSomething(a,b,function(a){return a*a})

console.log(x);