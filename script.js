// console.log("olá mundo!");

// //Console (mensagem no console)

// console.log("JavaScript conectado com sucesso!");


// // Alert (mensagem na tela)
// alert("Bem vindo ao site da Agência Criativa");

// // Prompt (entrada de usuário)
// //prompt("qual o seu nome?");

// // variaveis let, const = , var="nadyson"
 let NomeUsuario = prompt("qual seu nome");
 let mensagem = "prazer "+ NomeUsuario +" seja bem vindo à Angência Criativa";
// alert(mensagem)

//================================
// manipulando o DOM
//================================

// Selecionar titulo principal
let titulo = document.querySelector(".hero h2");
 
// alerta texto com base no usuario
titulo.innerText = mensagem

//Altera o estilo com js
document.body.style.background = "yellow";

//1. getElementById
let botao = document.getElementById("chat-toggle");
console.log("Botao do chat:", botao);

//altera a cor
botao.style.background="limon"



//2 getElementByClassName

let listaServicos = document.getElementsByClassName("servico");
console.log("Lista de serviços: ",listaServicos);

//acessar o primeiro item
listaServicos[0].style.background="green";
listaServicos[1].style.background="red";
listaServicos[2].style.background="blue";

//3 getElementsByTagName
let titulos = document.getElementsByTagName("h3");
console.log("todos os titulos h3: ", titulos);

//alterar texto do primeiro
titulos[0].innerText = "Serviço Alterado com JS"

//4 querySelector especifico
let tituloServico = document.querySelector(".servico h3");
console.log("Titulo do serviço: ", tituloServico);


//altera cor do texto
tituloServico.style.color ="red"