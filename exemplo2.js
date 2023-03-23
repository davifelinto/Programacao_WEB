// Exemplos da segunda aula de Programação para WEB
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738


// Array
let indefinido
const nulo = null
const meuArray = [1, 'dois', 3]

console.log(meuArray)
meuArray[0] = 'um'
console.log(meuArray)

// const meuArray = [
//     1,
//     'dois',
//     3
// ]

// Object
const meuObjetoPessoa = {
    nome: 'João',
    profissao: 'Professor',
    telefones: [6199887766, 6199778822]
}

console.log(meuObjetoPessoa)

console.log(meuObjetoPessoa.nome)
console.log(meuObjetoPessoa['nome'])
console.log(meuObjetoPessoa.telefones[1])

// If, else if, else
const hora = 12
let cumprimento = ''

if(hora<12){
    cumprimento = 'Bom dia!'
}
else if(hora<18){
    cumprimento = 'Boa tarde!'
}
else{
    cumprimento = 'Boa noite!'
}

console.log(cumprimento)

// Switch
const diaDaSemana = 4
let nomeDiaSemana = ''
switch(diaDaSemana){
    case 0:
        nomeDiaSemana = 'Domingo'
        break
    case 1:
        nomeDiaSemana = 'Segunda'
        break
    case 2:
        nomeDiaSemana = 'Terça'
        break
    case 3:
        nomeDiaSemana = 'Quarta'
        break
    case 4:
        nomeDiaSemana = 'Quinta'
        break
    case 5:
        nomeDiaSemana = 'Sexta'
        break
    case 6:
        nomeDiaSemana = 'Sábado'
        break
    default:
        nomeDiaSemana = 'Não encontrado!'
        break
}
console.log(nomeDiaSemana)

// For
const nomesDiaSemana = [
    'Domingo','Segunda',
    'Terça','Quarta',
    'Quinta','Sexta',
    'Sabado'
]

for(let index = 0; index<7; index++){
    nomeDiaSemana = nomesDiaSemana[index]
    console.log(nomeDiaSemana)
}

// For in
for(const key in nomesDiaSemana){
    const elemento = nomesDiaSemana[key]
    console.log(`${key} - ${elemento}`)
}

const carro = {
    modelo: 'Opala',
    ano: 1986,
    xor: 'Preto'
}

for(const key in carro){
    const elemento = carro[key]
    console.log(`${key} - ${elemento}`)
}

// While
let i=0

while(i<7){
    console.log(nomesDiaSemana[i])
    i++
}

do{
    // Se passar da indexação do objeto, ele lança um undefined
    console.log(nomesDiaSemana[i])
    i++
} while(i<7)
