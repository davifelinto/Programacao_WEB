// Multiplicação de matrizes
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

const A = [[1,2],[3,4]]
const B = [[1,2],[3,4]]

const linhasA = A.length
const colunasA = A[0].length
const linhasB = B.length
const colunasB = B[0].length

if (colunasA == linhasB) {
  const C = new Array(linhasA)
  for (let i = 0; i < linhasA; i++) {
    C[i] = new Array(colunasB).fill(0)
  }
  
  for (let i = 0; i < linhasA; i++) {
    for (let j = 0; j < colunasB; j++) {
      for (let k = 0; k < colunasA; k++) {
        C[i][j] += A[i][k] * B[k][j]
      }
    }
  }

  console.log("AxB=C:")
  for (let i = 0; i < linhasA; i++) {
    console.log(C[i])
  }
} else {
  console.log("As matrizes não podem ser multiplicadas.")
}
