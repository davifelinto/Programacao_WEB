// Contagem de Palavras Distintas em uma String
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

function palavrasDistintas(str){
    let palavras = str.split(' ')
    let counter = 0
    for(let i=0; i<=palavras.length; i++){
        for(let j=i+1; j<=palavras.length+1; j++){
            if (palavras[i] == palavras[j]){
                break
            }
            else if(j == palavras.length){
                counter += 1
            }
        }
    }
    return counter
}

// Para evitar contar palavras iguais com letras maiusculas diferentes como palavras diferentes
// pode-se colocar tudo como minusculo como neste exemplo.
function palavrasDistintasComSet(str){
    str = str.toLowerCase()
    let palavras = str.split(' ')
    let distintas = Array.from(new Set(palavras))
    return distintas.length
}

var s = "Crie uma função que recebe uma String e retorna um Array com as palavras distintas da String recebida."
var s2 = "Teste teste teste sera se funcionou funcionou"


console.log("\nPalavras distintas em uma String (Feito no braço): ")
console.log("Número de palavras distintas na string: ", palavrasDistintas(s))
console.log("Número de palavras distintas na outra string: ", palavrasDistintas(s2))


console.log("\nPalavras distintas em uma String (Feito com new Set()): ")
console.log("Número de palavras distintas na string: ", palavrasDistintasComSet(s))
console.log("Número de palavras distintas na outra string: ", palavrasDistintasComSet(s2))