console.log("Exercício 07 / Semana 05 / Módulo 01");


import Time from "./Time.js";
import Partida from "./Partida.js";


const times = [
    new Time("Grêmio", "GRE"),
    new Time("Internacional", "INT"),
    new Time("Figueirense", "FIG"),
    new Time("São Paulo", "SAO"),
]   
  
const partidas = [
    new Partida("GRE", 2, "INT", 1),
    // new Partida("FIG", 1, "GRE", 0),
    // new Partida("INT", 3, "SAO", 1),
    // new Partida("SAO", 1, "FIG", 1),
];
  
  
times.forEach(time => {
    partidas.forEach(partida => {
        time.computarPartida(partida);
    });
    // time.exibirSituacao();
    console.log(time)
});