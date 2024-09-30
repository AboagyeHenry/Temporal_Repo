const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./Context/first.txt','utf8')
const second = readFileSync('./Context/second.txt','utf8')

// console.log(first,second)

writeFileSync ('./Context/result-sync.txt',`Here is the result: ${first} & ${second}`,{flag: 'a'})
