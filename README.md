1. Abre um prompt solicitando que o usuário digite o número do cartão;

2. Se o usuário apertar o botão "ok", deixando o em branco ou inserir letras, irá receber um alerta pedindo para digitar os números;

3. Se digitar os números, o programa recebe os dígitos do cartão de crédito digitados pelo usuário;

4. Passa os dígitos para um array;

5. Em seguida é criada uma variável que irá manter o número do cartão invertido;

6. Na função "allNumbers" é feito um loop para que o numero do cartão seja invertido, e junto com a função "parseInt" que certifica que o argumento volte um inteiro. Depois o resultado retorna a variavel criada para manter o valor recebido;

7. Fora do For é chamada a função "allNumbers" para executar o calculo;

8. A função IsValidCard contém a variavel que irá manter o valor dos numeros pares, variavel que mantem o dobro do numero multiplicado por dois e o valor residual;

9. Ainda dentro da Funçãos isValidCard existe um For que irá fazer o loop dentre os valores pares e multiplica los por dois, se o dobro desse número for maior ou ou igual a 10, a formula irá somar o valor dos digítos do resultado;

10. No segundo "For", será feito a soma dos numeros nas posições impares e o novo número obtido nas posições pares;

11. Se o resultado da fórmula for o residuo  da divisão entre 10 e se é igual a 0, terá um alerta informado que o numéro do cartão é valido;

12. Caso contrário aparecerá um alerta informando que o número é inválido.

![Fluxograma Cartão de crédito Válido](Fluxograma Cartão de crédito Válido)
