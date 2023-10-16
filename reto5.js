function getMaxGifts(giftsCities, maxGifts, maxCities) {

  let aux = [...giftsCities.reduce((acc, value) => acc.concat(acc
    .map(el => [value].concat(el))), [[]])]
    .filter(el => el.length <= maxCities && el.length !== 0)
    .map(el => el.reduce((acc,v) => acc+v),0)
    .filter(el => el <= maxGifts)
    
  return Math.max(0,...aux) 
}

const giftsCities = [50, 70, 30]
const maxGifts = 100
const maxCities = 2


console.log(getMaxGifts([50, 70, 30], 100, 3))