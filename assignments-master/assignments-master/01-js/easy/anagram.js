/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove any non-word characters and convert strings to lowercase
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the lengths of the strings are different
  if (str1.length !== str2.length) {
      return false;
  }

  // Create character frequency maps for both strings
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  // Fill frequencyMap1
  for (let char of str1) {
      frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  // Fill frequencyMap2
  for (let char of str2) {
      frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  // Check if the frequency of characters in both maps are the same
  for (let char in frequencyMap1) {
      if (frequencyMap1[char] !== frequencyMap2[char]) {
          return false;
      }
  }

  return true;
}

let x= isAnagram("spar", "rasp");
console.log(x);

module.exports = isAnagram;
