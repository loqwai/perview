import { createType, copyCopyable, cloneClonable } from "ecsy";

class Vector2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(source: Vector2) {
    this.x = source.x;
    this.y = source.y;
    return this;
  }

  clone() {
    return new Vector2(this.x, this.y)
  }
}

export default Vector2

export const Vector2Type = createType({
  name: "Vector2",
  default: new Vector2(),
  copy: copyCopyable,
  clone: cloneClonable
});