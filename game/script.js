"use strict";

let valores = JSON.parse(localStorage.getItem("valor"));

let tabuleiro = [
  ["", "", ""],
  ["", "", ""], // aqui é o tabuleiro onde coloco os valores dos jogadores
  ["", "", ""],
];

let imagePlayerOne = "../assets/image/bolareserva.png"; // endereço das imagens que vão aparecer de cada jagador
let imagePlayerTwo = "../assets/image/xreserva.png";

let player = {
  playerTime: "",
  nome: "",
}; // x ou 0

let jogador = true;

let jogo = true;
let velha = true;

function clicar(linha, coluna, image) {// essa função eu já implementei como onclick no HTML, // esses parâmetros são as posições, quando eu clicar já implementa tal posição no tabuleiro
  
  let controleVelha = 0; 
  
  if (!jogo || !velha) {
    return;
  }
  if (jogador) {
    player.playerTime = "0";
    player.nome = valores[0];

    let player1 = `<img id="playerOne" src=${imagePlayerOne}>`;
    verficacao(tabuleiro,linha,coluna,player.playerTime,images,image,player1);
  } else {
    player.playerTime = "1";
    player.nome = valores[1];
    let player2 = `<img id="playerOne" src=${imagePlayerTwo}>`;
    verficacao(tabuleiro, linha, coluna, player.playerTime, images, image, player2);
  }

  for (let controle = 0; controle < 3; controle++) {
    if (
      tabuleiro[0][controle] == tabuleiro[1][controle] &&               // alinhamento na vertical
      tabuleiro[0][controle] == tabuleiro[2][controle] &&
      tabuleiro[0][controle] != ""
    ) {
      jogo = !jogo;
    }

    if (
      tabuleiro[controle][0] == tabuleiro[controle][1] &&                // alinhamento na horizontal
      tabuleiro[controle][0] == tabuleiro[controle][2] &&
      tabuleiro[controle][0] != ""
    ) {
      jogo = !jogo;
    }

    if (
      tabuleiro[0][0] == tabuleiro[1][1] &&
      tabuleiro[0][0] == tabuleiro[2][2] &&                               // diagonal
      tabuleiro[0][0] != ""
    ) {
      jogo = !jogo;
    }

    if (
      tabuleiro[0][2] == tabuleiro[1][1] &&                               //diagonal 
      tabuleiro[0][2] == tabuleiro[2][0] && tabuleiro[0][2] != ""
    ) {
      jogo = !jogo;
    }

  }

  for(let linhas = 0; linhas < tabuleiro.length; linhas++){
    for(let colunas = 0; colunas < tabuleiro.length; colunas++ ){       // controle pra verificar se deu velha
      if(tabuleiro[linhas][colunas] != ""){
        controleVelha++;
      }
    }
  }

  if(controleVelha == 9 && jogo !=  false){
    velha = !velha                                                      // caso dê velha 
  }

  if (!jogo) {
    setTimeout(
      () => alert(`o jogo acabou, o vencedor foi o ${player.nome}`),   // encerramento caso tenha algum vencedor
      300
    );
  }
  if (!velha) {
    setTimeout(
      () => alert(`o jogo acabou, não houve vencedor, jogo deu velha!!`), // encerramento caso o jogo dê velha 
      300
    );
  }
}

function verficacao(array, linhas, colunas, conteudo, callback, imagens, variavel) {
  // aqui eu verifico pra não poder ter click repetido, pra não mudar o valor de um valor já clicado
  if (array[linhas][colunas] == "") {
    array[linhas][colunas] = conteudo;
    callback(imagens, variavel);
  } else {
    alert("por favor selecione outro, esse já tá marcado!!");
  }
}

function images(imagem, variavel) {
  // esse callback eu uso pra mudar a imagem na página e mudar a vez do jogador
  imagem.innerHTML = variavel;
  return (jogador = !jogador);
}
