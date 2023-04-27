function comunidade(){
    let email=document.getElementById("email").value
    let nome=document.getElementById("nome").value
    let telefone=document.getElementById("telefone").value
    if( email == "" || nome == "" || telefone == ""){
        alert("Preencha todos os campos!")
    }else{
        alert("Que tal fazer o nosso quiz para receber recomendações personalizadas?")
        window.open('quiz.html')
    }
}

let camporesposta1 = document.getElementById("resp1")
let resposta1 
function peg1(){
let op1 = Number(prompt(`Você consome vinho regularmente?  \n [1]-Sim, pelo menos uma vez a cada 2 semanas \n [2]-Às vezes, pelo menos uma vez de 4 a 6 semanas \n [3]-Esporodicamente, pelo menos uma vez a cada 6 meses \n [4]-Raramente, pelo menos uma vez ao ano` ))
    console.log(op1)
    switch(op1){
    case 1:
        resposta1 = "Sim, pelo menos uma vez a cada 2 semanas"
        break;
    case 2:
        resposta1 = "Às vezes, pelo menos uma vez de 4 a 6 semanas"
       break;
    case 3:
        resposta1 = "Esporodicamente, pelo menos uma vez a cada 6 meses"
        break;
    case 4:
        resposta1 = "Raramente, pelo menos uma vez ao ano"
        break;
    default:
        resposta1 = "Opção inválida"
        break;
}}
    
let camporesposta2 = document.getElementById("resp2")
let resposta2
function peg2(){
let op2 = Number(prompt("Qual é o seu nível de conhecimento sobre vinhos? \n [1]-Alto \n [2]-Médio \n [3]-Baixo \n [4]-Nenhum"))
console.log(op2)
switch(op2){
case 1:
    resposta2 = "Alto"
    break
case 2:
    resposta2 = "Médio"
    break
case 3:
    resposta2 = "Baixo"
    break
case 4:
    resposta2 = "Nenhum"
    break
default:
    resposta2 = "Opção inválida"
    break;
}}
        
let camporesposta3 = document.getElementById("resp3")
let resposta3
function peg3(){
let op3 = Number(prompt("Qual o tipo de vinho você mais consome? \n [1]-Tinto \n [2]-Branco \n [3]-Rosé \n [4]-Espumante"))
console.log(op3)
switch(op3){
case 1:
    resposta3 = "Tinto"
    break
case 2:
    resposta3 = "Branco"
    break
case 3:
    resposta3 = "Rosé"
    break
case 4:
    resposta3 = "Espumante"
    break
default:
    resposta3 = "Opção inválida"
    break;
}}

let camporesposta4 = document.getElementById("resp4")
let resposta4
function peg4(){
let op4 = Number(prompt("Quanto você está disposto a pagar por um vinho? \n [1]-$-$$ \n [2]-$$-$$$ \n [3]-$$$-$$$$"))
console.log(op4)
switch(op4){
case 1:
    resposta4 = "$-$$"
    break
case 2:
    resposta4 = "$$-$$$"
    break
case 3:
    resposta4 = "$$$-$$$$"
    break
default:
    resposta4 = "Opção inválida"
    break;
}}

let camporesposta5 = document.getElementById("resp5")
let resposta5
function peg5(){
let op5 = Number(prompt("De qual continente você gostaria de provar um vinho? \n [1]-África \n [2]-América do Norte e Central \n [3]-América do Sul \n [4]-Ásia \n [5]-Europa \n [6]-Oceania"))
console.log(op5)
switch(op5){
case 1:
    resposta5 = "África"
    break
case 2:
    resposta5 = "América do Norte e Central"
    break
case 3:
    resposta5 = "América do Sul"
    break
case 4:
    resposta5 = "Ásia"
    break
case 5:
    resposta5 = "Europa"
    break
case 6:
    resposta5 = "Oceania"
    break
default:
    resposta5 = "Opção inválida"
    break;
}}

let camporesposta6 = document.getElementById("resp6")
let resposta6
function peg6(){
let op6 = Number(prompt("Você consegue sentir os aromas do vinho? \n [1]-Sim \n [2]-Às vezes \n [3]-Não"))
console.log(op6)
switch(op6){
case 1:
    resposta6 = "Sim"
    break
case 2:
    resposta6 = "Às vezes"
    break
case 3:
    resposta6 = "Não"
    break
default:
    resposta6 = "Opção inválida"
    break;
}}

let camporesposta7 = document.getElementById("resp7")
let resposta7
function peg7(){
let op7 = Number(prompt("Você consegue sentir os taninos? \n [1]-Sim \n [2]-Às vezes \n [3]-Não"))
console.log(op7)
switch(op7){
case 1:
    resposta7 = "Sim"
    break
case 2:
    resposta7 = "Às vezes"
    break
case 3:
    resposta7 = "Não"
    break
default:
    resposta7 = "Opção inválida"
    break;
}}

let camporesposta8 = document.getElementById("resp8")
let resposta8
function peg8(){
let op8 = Number(prompt("Você prefere vinhos com tons mais florais ou amadeirados? \n [1]-Florais \n [2]-Amadeirados \n [3]-Não sei como identificá-los"))
console.log(op8)
switch(op8){
case 1:
    resposta8 = "Florais"
    break
case 2:
    resposta8 = "Amadeirados"
    break
case 3:
    resposta8 = "Não sei como identificá-los"
    break
default:
    resposta8 = "Opção inválida"
    break;
}}

let camporesposta9 = document.getElementById("resp9")
let resposta9
function peg9(){
let op9 = Number(prompt("Você prefere vinhos com uma variedade de uva ou blended? \n [1]-Uma uva \n [2]-Blended"))
console.log(op9)
switch(op9){
case 1:
    resposta9 = "Uma uva"
    break
case 2:
    resposta9 = "Blended"
    break
default:
    resposta9 = "Opção inválida"
    break;
}}

let camporesposta10 = document.getElementById("resp10")
let resposta10
function peg10(){
let op10 = Number(prompt("Você gostaria de receber e-mails sobre a vinheria? \n [1]-Sim \n [2]-Não"))
console.log(op10)
switch(op10){
case 1:
    resposta10 = "Sim"
    break
case 2:
    resposta10 = "Não"
    break
default:
    resposta10 = "Opção inválida"
    break;
    
}}
 


var resp = document.getElementById("respostas")
function respostas(){
    camporesposta1.innerHTML = resposta1
    camporesposta2.innerHTML = resposta2
    camporesposta3.innerHTML = resposta3
    camporesposta4.innerHTML = resposta4
    camporesposta5.innerHTML = resposta5
    camporesposta6.innerHTML = resposta6
    camporesposta7.innerHTML = resposta7
    camporesposta8.innerHTML = resposta8
    camporesposta9.innerHTML = resposta9
    camporesposta10.innerHTML = resposta10
}

let containerindex = document.getElementById("containerindex")
function alerta(){
    alert("Seja bem-vindo!")
}

let containersobre = document.getElementById("containersobre")
function changeBackground(){
    console.log(containersobre)
    containersobre.style.backgroundColor = "#A494C7";
}

let containercontato = document.getElementById("containercontato")
function changeBackground2(){
    console.log(containercontato)
    containercontato.style.backgroundColor = "#BB9CD9";
}

let containerquiz = document.getElementById("containerquiz")
function changeBackground3(){
    alert("Vamos conhecer mais sobre vinho!")
    console.log(containerquiz)
    containerquiz.style.backgroundColor = "#B697C2";
}