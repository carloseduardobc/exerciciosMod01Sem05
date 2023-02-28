console.log("Exercício 04 / Semana 05 / Módulo 01");

import Animal from "./Animal.js";
import { Cachorro, Gato } from "./Animal.js";


const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // "latido"

const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // "miado"