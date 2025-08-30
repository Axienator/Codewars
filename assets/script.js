 function solution(string) {
  const arr =  string.split("") // break the string into characters
  const capArr = [] // Prepare a new array for the result
  // Loop through each character
  arr.forEach((char) => {
    if(char === char.toUpperCase()) {
      capArr.push(' ')
    }
    capArr.push(char) 
  });
  return capArr.join('') // join and convert as a string
}

//console.log(solution("camelCasing"));


function humanReadable (seconds) { 
  const m = Math.floor(seconds / 60).toString().padStart(2, '0') // Compute minutes
  const remainM = Math.floor(m % 60).toString().padStart(2, '0') // Compute Remaining minutes
  const remainS = Math.floor(seconds % 60).toString().padStart(2, '0') // Compute Remaining seconds
  const h = Math.floor(m / 60).toString().padStart(2, '0') // Compute hour
  return `${h}:${remainM}:${remainS}` // return them with a proper Time format

  // The thought process goes like this: Convert seconds -> minutes and hours -> Use % to handle leftovers -> Pad each unit to always be two digits -> join them altogether into a time string
}


console.log(humanReadable(60));
console.log(humanReadable(3600));

