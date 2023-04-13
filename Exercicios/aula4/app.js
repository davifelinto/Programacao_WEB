// Deste modo o projeto precisa ter a especificação "type": "module" no arquivo package.json
// import { calculadora } from "./modulo.mjs";
// console.log(calculadora.fatorial(0))

// Deste modo não é necessário especificar o projeto como modular no package.json
var calc = require('./calculadora')
console.log(calc.fatorial(0))