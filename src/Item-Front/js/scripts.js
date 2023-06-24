/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



const gameImage = document.getElementById('gameImage');

  // Obtém o valor do localStorage
  const godOfWarImage = localStorage.getItem('GodOfWar');

  // Define o valor do atributo src da imagem
  gameImage.src = godOfWarImage;




  const gameTitleElement = document.getElementById('gameTitle');

  // Obtém o valor do localStorage
  const gameTitle = localStorage.getItem('NomeJogo');

  // Define o conteúdo do elemento
  gameTitleElement.textContent = gameTitle;