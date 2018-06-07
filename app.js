var cardNumber = prompt("Por favor, insira o número do cartão: ");
if (cardNumber === "" || isNaN(cardNumber)){
    alert("Atenção! Digite o número do cartão de crédito.");
}
else{
    var cardArray = cardNumber.split('');}
    cardArrayContrario = cardArray.reverse();

function allNumbers(cardArrayContrario){
    for (var i in cardArrayContrario){
        cardArrayContrario[i] = parseInt(cardArrayContrario[i]);
    }
    return cardArrayContrario;
    }
allNumbers(cardArrayContrario);

function isValidCard(cardArrayContrario){
    var pairNumber = 0;
    var anyNumber = 0;
    var retorno = 0;
    var total = 0;
    for (i = 1; i < cardArrayContrario.length; i++){
      pairNumber = cardArrayContrario[i]*2;
       if(pairNumber > 9){
           pairNumber = pairNumber - 9;
           anyNumber = anyNumber + pairNumber;
       }else {
     anyNumber = anyNumber + pairNumber;
    }
    i++;
}
for (j = 0; j < cardArrayContrario.length; j++){
    retorno += cardArrayContrario[j];
    j++}
    total = anyNumber + retorno;

if (total % 10 === 0) {

    alert("NÚMERO DE CARTÃO VÁLIDO!");
   }

else{
    alert("NÚMERO DE CARTÃO INVALIDO")
}
}
isValidCard(cardArrayContrario);