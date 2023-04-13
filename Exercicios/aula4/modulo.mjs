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
        if (n2 == 0){
            return `Divisão por 0`
        }
        return n1/n2
    },
    fatorial: function(n){
        if (n === 1 || n === 0){
            return 1
        }
        return n * this.fatorial(n-1)
    }
}
export{calculadora}