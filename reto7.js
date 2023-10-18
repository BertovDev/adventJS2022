const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']


function getGiftsToRefill(a1, a2, a3) {
  let array = [[...new Set(a1)], [...new Set(a2)], [...new Set(a3)]]

  if(array.flat() === [] ) return []

  let result = array.flat().filter(
      (o => v => (o[v] = (o[v] || 0) + 1) === 2)
      ({})
  );


  return array.flat().filter(el => !result.includes(el))

}


console.log(getGiftsToRefill([], [], []))