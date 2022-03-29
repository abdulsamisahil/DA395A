const main = () => {
  console.log('Uppgift 5.')

  let countries = ['Sweden', 'Denmark', 'Finland', 'Norwary']

  let threeLetters = countries[1].substring(0, 3)

  let total = 0

  for (let i in countries) {
    total += countries[i].length
  }

  let average = total / countries.length

  console.log(threeLetters)
  console.log(average)
}

main()

exports.main = main
