console.log("Exercício 01 / Semana 05 / Módulo 01");


import Funcionario from "./Funcionario.js"; //Colocar SEMPRE no início do documento

const ada = new Funcionario("820.381.040-34", "Carlos Eduardo", 1000);
console.log(ada.salario); // 1000
ada.promover(50);
console.log(ada.salario); // 1500