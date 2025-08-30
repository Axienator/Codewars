// function solution(string) {
//  const arr =  string.split("")
//  const capArr = []
//  arr.forEach((char) => {
//    if(char === char.toUpperCase()) {
//      capArr.push(' ')
//    }
//    capArr.push(char)
//  });

//  return capArr.join('')
//}

//console.log(solution("camelCasing"));


function humanReadable (seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const remainM = Math.floor(m % 60).toString().padStart(2, '0')
  const remainS = Math.floor(seconds % 60).toString().padStart(2, '0')
  const h = Math.floor(m / 60).toString().padStart(2, '0')
  return `${h}:${remainM}:${remainS}`
}


console.log(humanReadable(60));
console.log(humanReadable(3600));

