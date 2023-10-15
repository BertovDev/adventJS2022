function distributeGifts(packOfGifts, reindeers) {
  let totalPacksWeight = 0;
  let reindeersWeight = 0;

  packOfGifts.forEach(pack => {
    totalPacksWeight += pack.length;
  })
  reindeers.forEach(reindeer => {
    reindeersWeight += reindeer.length * 2;
  })

  return Math.floor((reindeersWeight / totalPacksWeight))
}