/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) 
{
  
  for(let i =0; i<transactions.length; i++)
  {
    if(transactions[i]["category"] = newCategory)
    {

    }
  }


}

calculateTotalSpentByCategory([      
  {
  id: 1,
  price: 40,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 2,
  price: 300,
  category: 'Electronics',
  itemName: 'Speaker',
},
{
  id: 3,
  price: 5,
  category: 'Food',
  itemName: 'Hotdog',
},
{
  id: 4,
  price: 100,
  category: 'Clothing',
  itemName: 'Shoes',
},]); 

module.exports = calculateTotalSpentByCategory;
