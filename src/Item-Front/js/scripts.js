/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



const gameImage = document.getElementById('gameImage');

  // Obtém o valor do localStorage
  const godOfWarImage = localStorage.getItem('ImagemJogo');

  // Define o valor do atributo src da imagem
  console.log(godOfWarImage)
  gameImage.src = godOfWarImage;



  
  var valorJogo = localStorage.getItem('ValorJogo');

  
  const valor = document.getElementById('valorJogo');

  valor.textContent = valorJogo
  console.log(valorJogo)




  const gameTitleElement = document.getElementById('gameTitle');

  // Obtém o valor do localStorage
  const gameTitle = localStorage.getItem('NomeJogo');

  // Define o conteúdo do elemento
  gameTitleElement.textContent = gameTitle;

//definir o valor de cada produto  
/* let valor = 0;
if(godOfWarImage=='../HomePage-Front/images/good of war.jpeg'){
  valor = 80
}else if(godOfWarImage=='../HomePage-Front/images/Homem aranha.jpg'){
  valor = 25
}else if(godOfWarImage=='../HomePage-Front/images/assassin screed.jpg'){
  valor = 18
}else if(godOfWarImage=='../HomePage-Front/images/the last of us.jpeg'){
  valor = 40
}else if(godOfWarImage=='../HomePage-Front/images/fifa.jpg'){
  valor = 25
}else if(godOfWarImage=='../HomePage-Front/images/red dead.jpg'){
  valor = 120
}else if(godOfWarImage=='../HomePage-Front/images/gta.jpg'){
  valor = 18
}else if(godOfWarImage=='../HomePage-Front/images/resident evil.jpg'){
  valor = 40
}

//INPUT QUANTIDADE DO JOGO
var inputElement = document.getElementById('inputQuantity');
var valorInput = inputElement.value;
var valorTotal = valorInput*valor;

//Manupulacao para pegar a quantidade de itens e fazer o calculo

if(godOfWarImage == '../HomePage-Front/images/good of war.jpeg'){
  localStorage.setItem('valorTotalGodOf', valorTotal)
  localStorage.setItem('ProdutoGodOfWar', 1)
}else if(godOfWarImage=='../HomePage-Front/images/Homem aranha.jpg'){
  localStorage.setItem('valorTotalHomemAranha', valorTotal)
  localStorage.setItem('ProdutoHomemAranha', 1)
}else if(godOfWarImage=='../HomePage-Front/images/assassin screed.jpg'){
  localStorage.setItem('valorTotalAssassin', valorTotal)
  localStorage.setItem('ProdutoAssassin', 1)
}else if(godOfWarImage=='../HomePage-Front/images/the last of us.jpeg'){
  localStorage.setItem('valorTotalTheLast', valorTotal)
  localStorage.setItem('ProdutoGodTheLast', 1)
}else if(godOfWarImage=='../HomePage-Front/images/fifa.jpg'){
  localStorage.setItem('valorTotalFifa', valorTotal)
  localStorage.setItem('ProdutoFifa', 1)
}else if(godOfWarImage=='../HomePage-Front/images/red dead.jpg'){
  localStorage.setItem('valorTotalRedDead', valorTotal)
  localStorage.setItem('ProdutoRedDead', 1)
}else if(godOfWarImage=='../HomePage-Front/images/gta.jpg'){
  localStorage.setItem('valorTotalGta', valorTotal)
  localStorage.setItem('ProdutoGta', 1)
}else if(godOfWarImage=='../HomePage-Front/images/resident evil.jpg'){
  localStorage.setItem('valorTotalResident', valorTotal)
  localStorage.setItem('ProdutoResident', 1)
}
 */

// Obtém o elemento do botão
const button = document.querySelector('.btn-outline-dark');

// Adiciona um evento de clique ao botão
function Adicionar() {
  // Coloque aqui o código que deseja executar quando o botão for clicado
  let valor = 0;
if(godOfWarImage=='../HomePage-Front/images/good of war.jpeg'){
  valor = 80
}else if(godOfWarImage=='../HomePage-Front/images/Homem aranha.jpg'){
  valor = 25
}else if(godOfWarImage=='../HomePage-Front/images/assassin screed.jpg'){
  valor = 18
}else if(godOfWarImage=='../HomePage-Front/images/the last of us.jpeg'){
  valor = 40
}else if(godOfWarImage=='../HomePage-Front/images/fifa.jpg'){
  valor = 25
}else if(godOfWarImage=='../HomePage-Front/images/red dead.jpg'){
  valor = 120
}else if(godOfWarImage=='../HomePage-Front/images/gta.jpg'){
  valor = 18
}else if(godOfWarImage=='../HomePage-Front/images/resident evil.jpg'){
  valor = 40
}

//INPUT QUANTIDADE DO JOGO
var inputElement = document.getElementById('inputQuantity');
var valorInput = inputElement.value;
var valorTotal = valorInput*valor;

//Manupulacao para pegar a quantidade de itens e fazer o calculo

if(godOfWarImage == '../HomePage-Front/images/good of war.jpeg'){
  localStorage.setItem('valorTotalGodOf', valorTotal)
  localStorage.setItem('ProdutoGodOfWar', 1)
  localStorage.setItem('CondicionalGodOfWar',true)
}else if(godOfWarImage=='../HomePage-Front/images/Homem aranha.jpg'){
  localStorage.setItem('valorTotalHomemAranha', valorTotal)
  localStorage.setItem('ProdutoHomemAranha', 1)
  localStorage.setItem('CondicionalHomemAranha',true)
}else if(godOfWarImage=='../HomePage-Front/images/assassin screed.jpg'){
  localStorage.setItem('valorTotalAssassin', valorTotal)
  localStorage.setItem('ProdutoAssassin', 1)
  localStorage.setItem('CondicionalAssassin',true)
}else if(godOfWarImage=='../HomePage-Front/images/the last of us.jpeg'){
  localStorage.setItem('valorTotalTheLast', valorTotal)
  localStorage.setItem('ProdutoGodTheLast', 1)
  localStorage.setItem('CondicionalTheLast',true)
}else if(godOfWarImage=='../HomePage-Front/images/fifa.jpg'){
  localStorage.setItem('valorTotalFifa', valorTotal)
  localStorage.setItem('ProdutoFifa', 1)
  localStorage.setItem('CondicionalFIFA',true)
}else if(godOfWarImage=='../HomePage-Front/images/red dead.jpg'){
  localStorage.setItem('valorTotalRedDead', valorTotal)
  localStorage.setItem('ProdutoRedDead', 1)
  localStorage.setItem('CondicionalRedDead',true)
}else if(godOfWarImage=='../HomePage-Front/images/gta.jpg'){
  localStorage.setItem('valorTotalGta', valorTotal)
  localStorage.setItem('ProdutoGta', 1)
  localStorage.setItem('CondicionalGta',true)
}else if(godOfWarImage=='../HomePage-Front/images/resident evil.jpg'){
  localStorage.setItem('valorTotalResident', valorTotal)
  localStorage.setItem('ProdutoResident', 1)
  localStorage.setItem('CondicionalResident',true)
}
window.location.href = '../HomePage-Front/Front-home.html';
};