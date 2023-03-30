// Exemplos da terceira aula de Programação para WEB
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

// Função
function calculaSoma(n1,n2){
    return n1+n2
}
console.log("\nFunção calcuraSoma: ")
console.log("Soma de 8 e 5: ",calculaSoma(5, 8))

// Função em Objeto
const calculadora = {
    somar: function(n1,n2){
        return n1+n2
    },
    multiplicar: function(n1,n2){
        return n1*n2
    }
}
console.log("\nFunção em objeto calculadora: ")
console.log("Soma de 8 e 5: ",calculadora.somar(8,5))
console.log("Multiplicação de 8 e 5: ",calculadora.multiplicar(8,5))


// Função recursiva
function contarAte(n){
    if(n>0){
        console.log(n)
        contarAte(n-1)
    }
}
console.log("\nContagem recursiva: ")
contarAte(5)

function contarAteCrescente(n){
    if(n>0){
        contarAteCrescente(n-1);
    }
    console.log(n);
}
console.log("\nContagem recursiva crescente: ")
contarAteCrescente(5)