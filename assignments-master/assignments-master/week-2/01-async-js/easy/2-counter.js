let counter= 0; 



function functionForCounting()
{   
    console.log(counter);
    counter = counter+1; 
    
    setTimeout(functionForCounting, 1000);
 
}

    
functionForCounting();
