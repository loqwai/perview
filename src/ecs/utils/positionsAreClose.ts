
interface Position {
  x: number;
  y: number;
}

const positionsAreClose = (a: Position, b: Position, threshold: number) => {
  const dX = a.x - b.x
  const dY = a.y - b.y
  const distance = Math.sqrt( (dX*dX) + (dY*dY) )

  return distance <= threshold
}

export default positionsAreClose