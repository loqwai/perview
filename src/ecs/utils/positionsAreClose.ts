import distanceBetween from "./distanceBetween"

interface Position {
  x: number;
  y: number;
}

const positionsAreClose = (a: Position, b: Position, threshold: number) =>
  distanceBetween(a, b) <= threshold

export default positionsAreClose