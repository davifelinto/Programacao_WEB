// Imprimir matriz e transposta
const A = [[1,2],[3,4],[5,6]]
const At = new Array(A[0].length)

// Imprimir a matriz A
console.log("Matriz A:");
for (let i = 0; i < A.length; i++) {
  console.log(A[i]);
}

// Calcular a matriz transposta de A
for (let i = 0; i < At.length; i++) {
  At[i] = new Array(A.length);
  for (let j = 0; j < A.length; j++) {
    At[i][j] = A[j][i];
  }
}

// Imprimir a matriz transposta de A
console.log("Matriz A^t:");
for (let i = 0; i < At.length; i++) {
  console.log(At[i]);
}
