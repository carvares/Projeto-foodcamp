let precoprato = 0;
let precobebida = 0;
let precosobremesa = 0;


function selecionadoprato(escolha) {
    const listapratos = document.querySelector(".listapratos");
    const selecaoprato = document.querySelector(".bordaverdeprato");
    const selecaoiconeprato = listapratos.querySelector(".mostrar");
    const qualprato = "comida" + escolha;
    const qualtique = "icone" + escolha;
    const borda = document.querySelector("." + qualprato);
    const tique = document.querySelector("." + qualtique);


    if (selecaoprato !== null) {
        selecaoprato.classList.remove("bordaverdeprato");
        selecaoiconeprato.classList.remove("mostrar");
    }
    precoprato = parseFloat(document.getElementById("preco" + escolha).innerText);
    borda.classList.add("bordaverdeprato");
    tique.classList.add("mostrar");
    fecharconta();

}

function selecionadobebida(escolha) {
    const listabebidas = document.querySelector(".listabebidas");
    const selecaobebida = document.querySelector(".bordaverdebebida");
    const selecaoiconebebida = listabebidas.querySelector(".mostrar");
    const qualbebida = "bebida" + escolha;
    const qualtique = "." + "icone" + escolha;

    const borda = document.querySelector("." + qualbebida);
    const tique = document.querySelector(qualtique);

    if (selecaobebida !== null) {
        selecaobebida.classList.remove("bordaverdebebida");
        selecaoiconebebida.classList.remove("mostrar");
    }
    precobebida = parseFloat(document.getElementById("preco" + escolha).innerText);
    borda.classList.add("bordaverdebebida");
    tique.classList.add("mostrar");
    fecharconta();
}

function selecionadosobremesa(escolha) {
    const listasobremesas = document.querySelector(".listasobremesas");
    const selecaosobremesa = document.querySelector(".bordaverdesobremesa");
    const selecaoiconesobremesa = listasobremesas.querySelector(".mostrar");
    const qualsobremesa = "sobremesa" + escolha;
    const qualtique = "." + "icone" + escolha;

    const borda = document.querySelector("." + qualsobremesa);
    const tique = document.querySelector(qualtique);

    if (selecaosobremesa !== null) {
        selecaosobremesa.classList.remove("bordaverdesobremesa");
        selecaoiconesobremesa.classList.remove("mostrar");
    }
    precosobremesa = parseFloat(document.getElementById("preco" + escolha).innerText);
    borda.classList.add("bordaverdesobremesa");
    tique.classList.add("mostrar");
    fecharconta();
}
function fecharconta() {
    const finalizarcinza = document.querySelector(".finalizarcinza");
    const finalizarverde = document.querySelector(".finalizarverde");
    if (precoprato !== 0 && precobebida !== 0 && precosobremesa !== 0) {
        finalizarverde.classList.add("mostrar");
        finalizarcinza.classList.add("esconder");


    }

}
function pedir() {
    const resultado = parseFloat(precoprato + precobebida + precosobremesa);
    alert("R$:" + resultado.toFixed(2));
}