function wordReverse(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    return reverseWord;
  }
  
  let word = "Cavid";
  console.log(wordReverse(word));