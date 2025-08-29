function solution(string) {
  const arr =  string.split("")
  const capArr = []
  // const capital array = [Casing]
  arr.forEach((char) => {
    if(char === char.toUpperCase()) {
      capArr.push(' ')
    }
    capArr.push(char)
  });

  return capArr.join('')

  
  //create a counter variable on how many upperCases in the word
  //Make a for of loop
  //if count > 0 make space before the UpperCase
  //convert array to string
}

console.log(solution("camelCasing"));

