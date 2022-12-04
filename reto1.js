const gifts = ['cat', 'game', 'socks']

function wrapped(array) {
  aux = array.map(el => {
    let auxStr = ""
    for (let i = 0; i < el.length + 2; i++) {
      auxStr = auxStr + "*"
    }
    auxStr = auxStr + "\n*"
    let reverseStr = auxStr.split("").reverse().join("")
    auxStr = auxStr + el
    auxStr = auxStr + reverseStr
    return auxStr
  })

  return aux
}

console.log(wrapped(gifts))