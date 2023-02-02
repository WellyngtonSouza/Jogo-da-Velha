"use strict";
let input1 = document.getElementsByTagName("input")[0];
let input2 = document.getElementsByTagName("input")[1];

let valor =  []
function cli(element) {
    if(input1.value == "" || input2.value == ""){
      window.alert ("por favor preencha os nomes recomendados pra que o programa funcione!!")
    }else{
        valor.push(input1.value)
        valor.push(input2.value)
        localStorage.setItem("valor", JSON.stringify(valor))
      element.setAttribute("href", "../game/jogo.html")
    }
}

