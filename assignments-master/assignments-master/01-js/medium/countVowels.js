/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) 
{
  lowerCaseStr= str.toLowerCase().trim();

  // vowels are a,e,i,o,u  
  list = lowerCaseStr.split('');

  let counterA = 0; 
  let counterE = 0; 
  let counterI = 0; 
  let counterO = 0; 
  let counterU = 0; 
  let counter= 0;


  for(let i =0; i<list.length; i++)
  {
    if(list[i] == "a")
    {
      counter++;
    }

    if(list[i] == "e")
    {
      counter++; 
    }
    if(list[i] == "i")
    {
      counter++;
    }
    if(list[i] == "o")
    {
      counter++; 
    }
    if(list[i] == "u")
    {
      counter++;
    }
   
  }

 
  return counter;

}


let x= countVowels("scoobydoobydoo");

console.log(x);
module.exports = countVowels;