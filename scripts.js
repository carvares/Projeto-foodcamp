
function selecionadoprato(escolha){
    const selecaoprato = document.querySelector(".bordaverdeprato");
    const selecaoicone  = document.querySelector(".mostrar");
    const qualprato = "." + "comida" + escolha;
    const qualtique = "." + "icone" + escolha;

    const borda = document.querySelector(qualprato);
    const tique = document.querySelector(qualtique);
    
    if (selecaoprato !== null){
        selecaoprato.classList.remove("bordaverdeprato");
        selecaoicone.classList.remove("mostrar");
    }

    borda.classList.add("bordaverdeprato");
    tique.classList.add("mostrar");
}

function selecionadobebida(escolha){
    const selecaobebida = document.querySelector(".bordaverdebebida");
    const selecaoicone  = document.querySelector(".mostrar");
    const qualbebida = "." + "bebida" + escolha;
    const qualtique = "." + "icone" + escolha;

    const borda = document.querySelector(qualbebida);
    const tique = document.querySelector(qualtique);
    
    if (selecaobebida !== null){
        selecaobebida.classList.remove("bordaverdebebida");
        selecaoicone.classList.remove("mostrar");
    }

    borda.classList.add("bordaverdebebida");
    tique.classList.add("mostrar");
}

function selecionadosobremesa(escolha){
    const selecaosobremesa = document.querySelector(".bordaverdesobremesa");
    const selecaoicone  = document.querySelector(".mostrar");
    const qualsobremesa = "." + "sobremesa" + escolha;
    const qualtique = "." + "icone" + escolha;

    const borda = document.querySelector(qualsobremesa);
    const tique = document.querySelector(qualtique);
    
    if (selecaosobremesa !== null){
        selecaosobremesa.classList.remove("bordaverdesobremesa");
        selecaoicone.classList.remove("mostrar");
    }

    borda.classList.add("bordaverdesobremesa");
    tique.classList.add("mostrar");
}