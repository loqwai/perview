interface Position {
  x: number;
  y: number;
}

const distanceBetween = (a: Position, b: Position) => {
  const dX = a.x - b.x
  const dY = a.y - b.y
  return Math.sqrt( (dX*dX) + (dY*dY) )
}

export default distanceBetween


