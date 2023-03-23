// Imprimir matriz e transposta

const A = [ [1,2],[3,4],[5,6] ]
const At = [[],[]]

console.log('A:')
for(let i = 0; i < A.length; i++){
    let linha = ''
    for(let j = 0; j < A[i].length; j++){
        linha += A[i][j] + ' '
        At[j][i] = A[i][j]
    }
    console.log(linha)
}

console.log('A^t:')

for(let i = 0; i < At.length; i++){
    let coluna = ''
    for(let j = 0; j < At[i].length; j++){
        coluna += At[i][j] + ' '
    }
    console.log(coluna)
}