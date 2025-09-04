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


//console.log(humanReadable(60));
//console.log(humanReadable(3600));


function booleanToString(b){
  return b.toString()
} 

function digitize(n) {
  return  n.toString().split('').reverse().n.map(num => Number(num))
}

// console.log(digitize(32451));

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}

function duplicateCount(text){
  let str = text.toLowerCase()
  let count = {}
  let result = 0

  for(char of str) {
    count[char] = (count[char] || 0) + 1
      if(count[char] === 2) {
      result++
    }
  }
  return result
}

// console.log(duplicateCount('Indivisibility'));

var uniqueInOrder=function(iterable){
  let result = []

  for(char of iterable) {
    if(char !== result[result.length - 1]) {
      result.push(char)
    }
  }

  return result
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B']

function DNAtoRNA(dna) {
  const arr = Array.from(dna)
  return arr.map(char => char === 'T' ? 'U' : char).join('')
}

console.log(DNAtoRNA('GCAT'));

