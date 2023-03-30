// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

// Função calculadora
const calculadora = {
    somar: function(n1,n2){
        return n1+n2
    },
    subtrair: function(n1,n2){
        return n1-n2
    },
    multiplicar: function(n1,n2){
        return n1*n2
    },
    dividir: function(n1,n2){
        if(n2 == 0){
            return 'Divisão por 0'
        }
        else{
            return n1/n2
        }
    }
}

console.log("\nCalculadora basica: ")
console.log("Soma de 8 e 5: ",calculadora.somar(8,5))
console.log("Subtração de 8 e 5: ",calculadora.subtrair(8,5))
console.log("Multiplicação de 8 e 5: ",calculadora.multiplicar(8,5))
console.log("Divisão de 8 e 5: ",calculadora.dividir(8,5))
console.log("Divisão de 8 e 0: " + calculadora.dividir(8,0))

// Função calculadora fatorial
const calculadoraFat = {
    somar: function(n1,n2){
        return n1+n2
    },
    subtrair: function(n1,n2){
        return n1-n2
    },
    multiplicar: function(n1,n2){
        return n1*n2
    },
    dividir: function(n1,n2){
        if(n2 == 0){
            return 'Divisão por 0'
        }
        else{
            return n1/n2
        }
    },
    fatorial: function(n){
        if(n==1 || n==0){
            return 1
        }
        else{
            return this.fatorial(n-1)*n
        }
    }
}

console.log("\nCalculadora com Fatorial: ")
console.log("As utras operações são iguais as da calculadora anterior.")
console.log("Fatorial de 8: ",calculadoraFat.fatorial(8))

// Contagem de Palavras Distintas em uma String
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