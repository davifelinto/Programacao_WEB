// Multiplicação de matrizes

const A = [ [1,2],[3,4] ]
const B = [ [1,2],[3,4] ]
const C = [ [],[] ]

if (A.length == B[0].length){

    console.log('AxB=C:')
    for(let i = 0; i < A.length; i++){
        let linha = ''
        for(let j = 0; j < B.length; j++){
            C[i][j] = 0
            for(let k = 0; k < B[j].length; k++){
                C[i][j] += A[i][k]*B[k][i]
            }
            linha += C[i][j] + ' '
        }
        console.log(linha)
    }

}
else{
    console.log("Matrizes não multiplicáveis")
}

// for(i = 0; i < linhaA; i++) {
//     for(j = 0; j < colunaB; j++) {
//         matrizC[i][j] = 0;
//         for(x = 0; x < linhaB; x++) {
//             aux +=  matrizA[i][x] * matrizB[x][j];
//         }

//         matrizC[i][j] = aux;
//         aux = 0;
//     }
// }