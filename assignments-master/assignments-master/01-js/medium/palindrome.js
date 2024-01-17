/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) 
{

  x= str.trim().toLowerCase();
  console.log(x);

  let left = 0;
  let right= str.length-1; 
  
  while(left < right)
  {
    if(str[left] != str[right])
    {
      return false; 
    }
    else
    {
      left++;
      right--; 
    }
  }
  return true; 
}


console.log(isPalindrome("Nan")); // Output: true (Case-insensitive, contains non-alphanumeric character)
console.log(isPalindrome("racecar")); // Output: true (Entirely lowercase, common palindrome)
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (Case-insensitive, contains spaces and punctuation)
console.log(isPalindrome("level")); // Output: true (Common palindrome)
console.log(isPalindrome("hello")); // Output: false (Not a palindrome)
console.log(isPalindrome("12321")); // Output: true (Palindrome number)
console.log(isPalindrome("12345")); // Output: false (Not a palindrome number)
console.log(isPalindrome("")); // Output: true (Empty string is a palindrome)
console.log(isPalindrome("A")); // Output: true (Single character is a palindrome)
console.log(isPalindrome("noon")); 

module.exports = isPalindrome;
