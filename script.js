let numAulas = parseInt(prompt("Digite o número total de aulas do semestre: "));
let faltas = parseInt(prompt("Digite a quantidade de faltas do aluno: "));
let p1 = parseFloat(prompt("Digite a nota da P1: "));
let p2 = parseFloat(prompt("Digite a nota da P2: "));

let percentualPresenca = ((numAulas - faltas) / numAulas) * 100;

let situacao;
let notaRecuperacao = "-";

if (percentualPresenca < 75) {
  situacao = "Reprovado por falta";
} else {
  let media = (p1 + p2) / 2;

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5 && media < 7) {
    notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação: "));
    let mediaFinal = (media + notaRecuperacao) / 2;

    if (mediaFinal >= 5) {
      situacao = "Aprovado após recuperação";
    } else {
      situacao = "Reprovado após recuperação";
    }
  } else {
    situacao = "Reprovado";
  }
}

console.log("\n--- Resultado Final ---");
console.log("Número de aulas do semestre: " + numAulas);
console.log("Número de faltas do aluno: " + faltas);
console.log("Percentual de presença do aluno: " + percentualPresenca.toFixed(2) + "%");
console.log("A primeira nota: " + p1);
console.log("A segunda nota: " + p2);
console.log("Nota complementar (recuperação): " + notaRecuperacao);
console.log("Situação final do aluno: " + situacao);
