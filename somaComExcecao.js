//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let numero = parseInt(gets());

let soma = 0;
for (let i = 1; i <= numero; i++) {
  //TODO: Crie uma condição para soma dos números de 1 até o número fornecido (exceto aqueles divisíveis por 3).
  if(i % 3 !== 0){
    soma = soma + i
  }
}

//TODO: Imprima a saída no padrão definido neste desafio.
console.log("	Soma dos números de 1 a " + numero +", exceto os divisíveis por 3: " + soma);