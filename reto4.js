const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 1, w: 2, h: 2 }
]

const boxes3 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]

function fitsInOneBox(boxes) {
  let fits = [];
  boxes.sort((a,b) => (a.l - b.l) && (a.w - b.w) && (a.h - b.h));
  
  for(let i = 0;i<boxes.length;i++){
   if(i !== boxes.length-1){
      fits.push(boxes[i].l < boxes[i+1].l 
                && boxes[i].w < boxes[i+1].w 
                && boxes[i].h < boxes[i+1].h);
   }
  }

  return !fits.includes(false);
}

console.log(fitsInOneBox(boxes3))