const main = () => {
  console.log('Uppgift 3.')

  console.log("It's Learning".substring(5).toUpperCase())
  console.log('JavaScript: The Good Parts'.substring(16).toLowerCase())
  console.log('JavaScript: The Good Parts'.substring(16, 20).toUpperCase())
  console.log('Eloquent JavaScript'.substring(5, 13))
}

main()

exports.main = main
