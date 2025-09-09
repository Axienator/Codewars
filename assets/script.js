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

//console.log(DNAtoRNA('GCAT'));

var findClosest = function(x, y, z) {
  let XZ = Math.abs(x - z)
  let YZ = Math.abs(y - z)
  if(XZ === YZ) return 0
  if(XZ <= YZ) return 1
  if(YZ <= XZ) return 2
};

//console.log(findClosest(1, 5, 3));


var threeConsecutiveOdds = function(arr) {
  const filter = arr.filter(num => num % 2 !== 0)

  return filter.length > 2 ? true : false
};

// console.log(threeConsecutiveOdds([3,6,5,4,1]));


function isSolved(board) {

  // row
  for(row of board) {
    if (row.every(cell => cell === 1)) return 1
    if (row.every(cell => cell === 2)) return 2
  }
  
  //column
  for(let i = 0; i < 3; i++) {
    if(board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i]
    }

   //diagonal

   if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[1][1]
   if(board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[1][1]
  }

  //if there is 0 but there is also a 3 1's || 2's it should not be -1

  for(cell of board) {
    if(cell.includes(0)) return -1
  } 

  return 0
}
console.log(isSolved(
  [
   [0, 1, 1],    // row 0
   [2, 0, 2],    // row 1
   [2, 1, 0]     // row 2
  ]))    
