// Função calculadora fatorial
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

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