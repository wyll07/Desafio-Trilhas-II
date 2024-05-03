/*1.  	Elabore um algoritmo que contenha uma função chamada “Operacao”, a qual recebe 2 parâmetros e,
 após as operações, imprima a soma da exponenciação, o resto da divisão do primeiro pelo segundo e a 
 subtração do segundo pelo primeiro.*/ 

function operacao (numero1, numero2){
    let soma = ((numero1)**numero2)+(numero2**numero1);
    let resto = numero1%numero2;
    let subtracao = numero2 - numero1;
    console.log('soma da exponenciação:', soma);
    console.log('o resto da divisão do primeiro pelo segundo: ',  resto);
    console.log(' subtração do segundo pelo primeiro:', subtracao);

}
operacao(4,2)