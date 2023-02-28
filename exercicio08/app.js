console.log("Exercício 08 / Semana 05 / Módulo 01");

import Usuario from "./Usuario.js";

const cEmail = document.getElementById("campo-email");
const cSenha = document.getElementById("campo-senha");
const bAcessar = document.getElementById("botao-acessar");
const pMensagem = document.getElementById("mensagem");

const usuarios = [
    new Usuario("Carlos", "carlos@gmail.com", "123"),
    new Usuario("Eduardo", "eduardo@gmail.com", "456"),
];

bAcessar.addEventListener("click", () => {

    const email = cEmail.value;
    const senha = cSenha.value;

    let usuarioEncontrado = null;

    if (email && senha) {
        usuarioEncontrado = usuarios.find(usuario => {
        return usuario.autenticar(email, senha)
        });
    }

    if (usuarioEncontrado) {
        pMensagem.innerHTML = `Olá, ${usuarioEncontrado.nome}!`;
        cEmail.value = "";
        cSenha.value = "";
    } else {
        pMensagem.innerHTML = "Credenciais inválidas!";
    }

})
