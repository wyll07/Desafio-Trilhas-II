
function rendimentoBanco(capitalAplicado, tempoDeAplicação){
  
    // 1° parte da situação da letra c
    if(capitalAplicado.toFixed(2) > 50000.00 && capitalAplicado.toFixed(2) <= 100000.00 && tempoDeAplicação > 12 && tempoDeAplicação <= 24){  
      taxaJuros = 5;
      let rendimento = capitalAplicado*((+1)+Number(taxaJuros/100))**tempoDeAplicação;
      alert(`A poupança de  R$ ${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicação} meses, rendeu R$ ${rendimento.toFixed(2)}`);
    // 2° parte da situação da letra c
    } else if(capitalAplicado.toFixed(2) > 50000.00 && capitalAplicado.toFixed(2) <= 100000.00 && tempoDeAplicação == 12){  
      taxaJuros = 10;
      rendimento = capitalAplicado*((+1)+Number(taxaJuros/100))**tempoDeAplicação;
      alert(`A poupança de  R$ ${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicação} meses, rendeu R$ ${rendimento.toFixed(2)}`);

    //situação da  letra b
    } else if(capitalAplicado.toFixed(2) >= 999.99 && capitalAplicado.toFixed(2) <= 10000.00 && tempoDeAplicação > 5 && tempoDeAplicação < 12){
    
      taxaJuros = 2;
    rendimento = capitalAplicado*((+1)+Number(taxaJuros/100))**tempoDeAplicação;
    alert(` A quantia de R$ ${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicação} meses, rendeu R$ ${rendimento.toFixed(2)}`) 
    //situação da letra a
  }else{    

    taxaJuros = 0.6022;
    rendimento = capitalAplicado*((+1)+Number(taxaJuros/100))**tempoDeAplicação;
    alert(` A quantia de R$ ${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicação} meses, rendeu R$ ${rendimento.toFixed(2)} a juros de ${taxaJuros}%`)

   }
  }
function pegarValor(){
    let valor = Number(prompt('Qual o valor que você deseja investir?'));
    let tempo = Number(prompt('Quantos meses você deseja deixar o dinheiro investido?'));
   while(valor < 0 || (isNaN(valor))== true || tempo < 0 || (isNaN(tempo)) == true){
    
        alert('Valor informado inválido! Por favor, informe o valor depositado na poupança');
        valor = Number(prompt('Qual o valor que você deseja investir?'));
        tempo = Number(prompt('Quantos meses você deseja deixar o dinheiro investido?'))
   }
rendimentoBanco(valor,tempo);
  
}
pegarValor();

