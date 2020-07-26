import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Moveable extends Component<Moveable> {
  direction: Vector2 = new Vector2()
  maxSpeed: number = 0
  minSeparation: number = 25
}

Moveable.schema = {
  direction: { type: Vector2Type, },
  maxSpeed: { type: Types.Number, },
  minSeparation: { type: Types.Number, },
}

export default Moveable