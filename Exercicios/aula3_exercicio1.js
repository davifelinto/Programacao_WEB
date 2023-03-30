// Função calculadora
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

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