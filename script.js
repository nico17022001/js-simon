const messaggioFinale = document.querySelector("#messaggioFinale")

let numberArray = [];

const random = (min,max) => Math.floor(Math.random()* (max - min + 1) + min);  

for (let index = 1; index <= 5; index++) {
  const numeroRandom = random(1,100);
  if (!numberArray.includes(numeroRandom)){
  numberArray.push(numeroRandom);
}} ;

messaggioFinale.innerHTML = (numberArray) 

setTimeout(() => {
  messaggioFinale.classList.add("hide")
}, 5000);


setTimeout(() => {
  for (let index = 1; index <= 5; index++) {
    const inserisciNumeroVisualizzato = prompt("Inserisci numero visualizzato")
  }
}, 6000);






















