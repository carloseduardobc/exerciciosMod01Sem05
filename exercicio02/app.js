console.log("Exercício 02 / Semana 05 / Módulo 01");

import Fatura from "./Fatura.js";


const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();
const valorTotal = melao.valorTotal;

console.log(valor); // 6
console.log(melao.valorTotal);