let nbr = [10, 15, 16, 5005, 52390903]

for (let elem = 0; elem < nbr.length; elem++) {
  console.log(`binaire ${nbr[elem].toString(2)}`)
  console.log(`octal ${nbr[elem].toString(8)}`)
  console.log(`hexadécimal ${nbr[elem].toString(16)}`)
}