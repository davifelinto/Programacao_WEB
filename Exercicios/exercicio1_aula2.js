// Imprimir matriz e transposta
// Aluno: Davi Hugo Sateles Felinto
// Matrícula: UC21105738

const A = [[1,2],[3,4],[5,6]]
const At = new Array(A[0].length)

console.log("Matriz A:");
for (let i = 0; i < A.length; i++) {
  console.log(A[i]);
}

for (let i = 0; i < At.length; i++) {
  At[i] = new Array(A.length);
  for (let j = 0; j < A.length; j++) {
    At[i][j] = A[j][i];
  }
}

console.log("Matriz A^t:");
for (let i = 0; i < At.length; i++) {
  console.log(At[i]);
}
