// console.log(__dirname)
// console.log(__filename)
// console.log(module)
// console.log(process)



const names = require('./names')
const sayHi = require('./utils')
const data = require('./Data')
require('./addFigures')


console.log(data)
sayHi(names.john)
sayHi(names.blemo)
sayHi(names.dad)
sayHi("Hannah")