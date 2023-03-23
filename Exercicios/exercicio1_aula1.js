let num_A = 432
let num_B = 234
let operacoes = ['Adição', 'Subtração', 'Multiplicação', 'Divisão']
let resultado = {'Adição':(num_A+num_B),'Subtração':num_A-num_B,'Multiplicação':num_A*num_B,'Divisão':num_A/num_B}

for (let n = 0; n<4; n++)
    console.log('Resultado da ' + operacoes[n] + ' entre ' + num_A + ' e ' + num_B + " = " + resultado[operacoes[n]])