// =====================================
// AULA 2 – EVENTOS
// =====================================

let botaoWhats = document.querySelector(".btn-whatsapp");
let servicos = document.querySelectorAll(".servico");
console.log("Lista de serviços: ", servicos);

console.log("Primeiro serviço: ", servicos[0]);
console.log("Segundo serviço: ", servicos[1]);

function mostrarMensagem(){
    alert("Você clicou em um serviço!");
}

let primeiroServico = document.querySelector(".servico");
primeiroServico.addEventListener("click", mostrarMensagem);



botaoWhats.addEventListener("click", function (e){
    e.preventDefault();
    alert("Você será redirecionado para o WhathsApp!");
    window.open("https://wa.me/5586994517396","_blank");
});

servicos.forEach(function(servico){
    servicos.addEventListener("click", function(){
        let tituloServico = servico.querySelector("h3").innerText;
        alert("Clicou em um serviço");
    });
});

servicos.forEach(function(servico){
    servicos.addEventListener("mouseenter", function(){
        servico.style.background = "yellow"
       
    });
     servicos.addEventListener("mouseleave", function(){
        servico.style.background = "#e6e6e6"
    });
});

servicos.forEach(function(servico){
    servicos.addEventListener("dblclick", function(){
        alert("Duplo clique detectado!");
    });
});

document.addEventListener("keydown", function(e){
    console.log("Tecla pressionada: ", e.key);
});