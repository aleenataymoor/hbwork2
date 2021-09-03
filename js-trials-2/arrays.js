"use strict";


// 1. printIndices
function printIndices(items) {
  
  for (const i in items)
    console.log(`${items[i]} ${i}`)
    
  
}
// printIndices(['cherry', 'berry', 'apple'])

// 2. everyOtherItem
function everyOtherItem(items) {
  let everyOther = []

  for (const i in items){
    if (i % 2===0){
      everyOther.push(items[i])
  

    }

  }
  console.log(everyOther)
 
}
// everyOtherItem([1,2,3,4,5,6,7,8,9,10])

// 3. smallestNItems
function smallestNItems(items, n) {
  const itemsSorted = items.sort((a,b) => a-b);
  const slicedItems= itemsSorted.slice(0,n);
  const reversed=slicedItems.reverse();
  return reversed;
  }

  // smallestNItems([1,20,3,47,45,6,76,8,96,100], 5) 
  