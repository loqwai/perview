const unitVector = ({ x, y }: { x: number, y: number }) => {
  const r = Math.sqrt(x*x + y*y)

  return {
    x: x / r,
    y: y / r,
  }
}

export default unitVector