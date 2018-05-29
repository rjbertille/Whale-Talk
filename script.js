// This variable will contain the text we will translate into whale language //

const input = "I'm feel overwhelmed";
const vowels = ["a", "b", "c", "d"];
const resultArray = [];

// Need an array of letters that we are going to look for in the input variable //

for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(`ìnputIndex is ${inputIndex}`);//
  // When we find are vowel in the "input" string//
  //we will need somewhere to store it//

  //To find all the vowels in the "input" string//
  //Going letter-by-letter to check if each letter in the input is a vowel//
  for(let j = 0; j < vowels.length; j++) {
    /*console.log(`j is ${j}`); */ 
  
 //This will only push the characters from "input" that are vowels to the "resultArray"//
    if(input[inputIndex] === vowels[j]){
    resultArray.push(input[inputIndex]);
    }
  //The inner for-loop will fire many more times. It will fire times for each letter in the original input */
    if(input[inputIndex] === 'e' || input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
    console.log(resultArray.join('').toUpperCase());
    /*console.log(resultArray);*/
    }
  }
}

/*
E
EE
EEE
EEEE
EEEEE

 */ 
/*