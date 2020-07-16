import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Moveable extends Component<Moveable> {
  direction: Vector2 = new Vector2()
  speed: number = 0
}

Moveable.schema = {
  direction: { type: Vector2Type, },
  speed: { type: Types.Number, },
}

export default Moveable