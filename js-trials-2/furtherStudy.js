"use strict";


function wordsInCommon(words1, words2) {
  
    let setOne = new Set(words1)
    let setTwo = new Set(words2)

    const result = new Set()

    for (const word of setOne){
      if (setTwo.has(word)){
        result.add(word)
      }
    }
    

    return Array.from(result)
}


function kidsGame(names) {
  const output = [names.shift()]

  let firstLetterToWords = {}

 
  for (const name of names){
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]]=[name]

    }
    else{
      firstLetterToWords[name[0]].push(name)
    }
  }

  
  while (true){
    const lastWord = output[output.length-1]
    const lastChar = lastWord[lastWord.length-1]
    if (firstLetterToWords[lastChar] === undefined ||
          firstLetterToWords[lastChar].length === 0
          ) {
            break;
          }
      
          const nextWord = firstLetterToWords[lastChar].shift();
          output.push(nextWord);
        }
      
     return output;
}
