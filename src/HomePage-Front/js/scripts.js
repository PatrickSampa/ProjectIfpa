/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function GodOfWar(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/good of war.jpeg')
    localStorage.setItem('NomeJogo',"God Of War")
    localStorage.setItem('ValorJogo','$80')
}

function HomemAranha(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/Homem aranha.jpg')
    localStorage.setItem('NomeJogo',"Marvel's Spider-Man")
    localStorage.setItem('ValorJogo',"$25")
}

function Assassin(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/assassin screed.jpg')
    localStorage.setItem('NomeJogo',"Assassin's Creed")
    localStorage.setItem('ValorJogo',"$18")
}

function TheLast(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/the last of us.jpeg')
    localStorage.setItem('NomeJogo',"The Last Of Us")
    localStorage.setItem('ValorJogo',"$40")
}

function FIFA(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/fifa.jpg')
    localStorage.setItem('NomeJogo',"FIFA 23")
    localStorage.setItem('ValorJogo',"$25")
}

function RedDead(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/red dead.jpg')
    localStorage.setItem('NomeJogo',"Red Dead Redemption 2")
    localStorage.setItem('ValorJogo',"$120")
}

function gta(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/gta.jpg')
    localStorage.setItem('NomeJogo',"Grand Theft Auto V")
    localStorage.setItem('ValorJogo',"$18")
}

function Resdiente(){
    console.log("localstorage")
    localStorage.setItem('ImagemJogo','../HomePage-Front/images/resident evil.jpg')
    localStorage.setItem('NomeJogo',"Residente Evil 4")
    localStorage.setItem('ValorJogo',"$40")
}


const CondicionalGodOfWar  = localStorage.getItem('CondicionalGodOfWar') 
const CondicionalHomemAranha = localStorage.getItem('CondicionalHomemAranha') 
const CondicionalAssassin = localStorage.getItem('CondicionalAssassin') 
const CondicionalTheLastOfUs = localStorage.getItem('CondicionalTheLast') 
const CondicionalFIFA = localStorage.getItem('CondicionalFIFA') 
const CondicionalRedDead = localStorage.getItem('CondicionalRedDead') 
const CondicionalGTA = localStorage.getItem('CondicionalGta') 
const CondicionalResident = localStorage.getItem('CondicionalResident') 


let valorCarinho = 0

const cartCount = document.getElementById('cartCount');

// Define o novo valor para o conteúdo do <span>
if(CondicionalGodOfWar){
    valorCarinho +=1;
    localStorage.setItem('CondicionalGodOfWar',false)
}

if(CondicionalHomemAranha){
    valorCarinho +=1;
    localStorage.setItem('CondicionalHomemAranha',false)
}

if(CondicionalAssassin){
    valorCarinho +=1;
    localStorage.setItem('CondicionalAssassin',false)
}

if(CondicionalTheLastOfUs){
    valorCarinho +=1;
    localStorage.setItem('CondicionalTheLast',false)
}

if(CondicionalFIFA){
    valorCarinho +=1;
    localStorage.setItem('CondicionalFIFA',false)
}

if(CondicionalRedDead){
    valorCarinho +=1;
    localStorage.setItem('CondicionalRedDead',false)
}

if(CondicionalGTA){
    valorCarinho +=1;
    localStorage.setItem('CondicionalGta',false)
}

if(CondicionalResident){
    valorCarinho +=1;
    localStorage.setItem('CondicionalResident',false)
}

console.log(valorCarinho)

cartCount.textContent = valorCarinho; // Defina o valor desejado aqui