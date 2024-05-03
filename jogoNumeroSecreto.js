let numeroSecreto =parseInt((Math.random() * (30 -20))+20);
console.log(numeroSecreto);
for(let tentativa=1;tentativa<=3;tentativa++){
    let chute = prompt('Jogo do Número Secreto! Escolha um Número entre 20 e 30:');
  if(chute == numeroSecreto ){
    alert('Você Acertou o Número Secreto!!!');
    break;
  } else if(tentativa<3){
      alert('Você Errou!');
  } else {
    alert('Tentavivas esgotadas! Você Perdeu :(');
  }
}


