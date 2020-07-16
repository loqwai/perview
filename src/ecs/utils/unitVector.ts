import Vector2 from "../types/Vector2"

const unitVector = ({ x, y }: { x: number, y: number }) => {
  const r = Math.sqrt(x*x + y*y)

  return new Vector2(
    x / r,
    y / r,
  )
}

export default unitVector