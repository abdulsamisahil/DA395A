const main = () => {
  console.log('Uppgift 4.')

  let numbers = [128, 256, 512, 1024, 2048]

  // räknar summan av alla numbers element
  const sum = numbers.reduce((num1, num2) => {
    return num1 + num2
  })

  console.log(sum)

  // räknar medelvärdet av alla element
  let average = sum / numbers.length
  console.log(average)
}

main()

exports.main = main
