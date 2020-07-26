import { createType, copyCopyable, cloneClonable } from "ecsy";

class Vector2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  set = (x: number, y: number) => {
    this.x = x;
    this.y = y;
    return this;
  }

  copy = (source: Vector2) => {
    this.x = source.x;
    this.y = source.y;
    return this;
  }

  clone = () => new Vector2().copy(this)

  /**
   * returns a new vector with the other vector's x & y
   * components added to this one
   * */
  add = (other: Vector2): Vector2 => this.clone().addMut(other)

  /**
   * mutates the vector, adding the other vector's x & y
   * components to this one
   * */
  addMut = (other: Vector2): Vector2 => {
    this.x += other.x
    this.y += other.y
    return this
  }

  /**
   * If the magnitude of the vecor is greater than the limit, it will return
   * a new vector scaled down so its magnitude is equal to the limit
   */
  limit = (n: number) => this.clone().limitMut(n)

  /**
   * If the magnitude of the vecor is greater than the limit, it will scale
   * down to a vector with a magnitude equal to the limit
   */
  limitMut = (n: number) => {
    const magnitude = this.magnitude()
    if (n < magnitude) {
      this.divideScalarMut(magnitude / n)
    }
    return this
  }

  /**
   * Returns a new vector with both x & y divided by n
   * */
  divideScalar = (n: number) => this.clone().divideScalarMut(n)

  /**
   * Mutates the current vector, dividing both x & y by n.
   * Returns itself for easy chaining
   * */
  divideScalarMut = (n: number): Vector2 => {
    this.x /= n
    this.y /= n
    return this
  }

  magnitude = () => Math.sqrt((this.x * this.x) + (this.y * this.y))

  /**
   * Returns a new vector with both x & y multiplied by n
   * */
  multiplyScalar = (n: number) => this.clone().multiplyScalarMut(n)

  /**
   * Mutates the current vector, dividing both x & y by n.
   * Returns itself for easy chaining
   * */
  multiplyScalarMut = (n: number): Vector2 => {
    this.x *= n
    this.y *= n
    return this
  }

  toJSON = (indent?: number) => {
    const { x, y } = this
    return JSON.stringify({ x, y }, null, indent ?? 0)
  }

  /**
   * returns a new vector with the other vector's x & y
   * components subtracted from this one
   * */
  subtract = (other: Vector2): Vector2 => this.clone().subtractMut(other)

  /**
   * mutates the vector, subtracting the other vector's x & y
   * components from this one
   * */
  subtractMut = (other: Vector2): Vector2 => {
    this.x -= other.x
    this.y -= other.y
    return this
  }

  /**
   * Returns a new unit vector of the current vector. If the magnitude of the
   * current vector is 0, it will return the 0, 0 vector
   * */
  unit = () => this.clone().unitMut()

  unitMut = () => {
    const magnitude = this.magnitude()

    return (magnitude === 0)
      ? this.multiplyScalar(0)
      : this.divideScalarMut(magnitude)
  }
}

export default Vector2

export const Vector2Type = createType({
  name: "Vector2",
  default: new Vector2(),
  copy: copyCopyable,
  clone: cloneClonable
});