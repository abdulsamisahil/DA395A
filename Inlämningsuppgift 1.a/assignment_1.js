/* 

Fråga 1. Vad händer, och varför, om vi skriver följande?
Console.log(hello); 

Svar: En error skrivs ut i konsolen med meddelandet om att variablen hello är odefinerad.

 */

const main = () => {
  // Vi skriver ut vilken uppgift detta gäller först
  console.log('Uppgift 1.')

  // Ersätt frågetecknet med en av de operatorer som listats ovan
  console.log(5 * 2 < 12)
  console.log(55 > 22)
  console.log(16 / 4 == 4)
  console.log(8 + 2 <= 128)
  console.log(32 * 8 != 255)
}

main()

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main

/* 

Fråga 2. Vad händer, och varför, om vi skriver följande?

Svar: Skriver ut Doe i konsolen, då metoden string.substring(startIndex) returnerar 
hela strängen efter startIndexen som passas genom argumentet.

*/
