import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";


class Moveable extends Component<Moveable> {
  hasDestination = false
  destination: Vector2 = new Vector2()
  speed = 100
}

Moveable.schema = {
  hasDestination: { type: Types.Boolean },
  destination: { type: Vector2Type, },
  speed: { type: Types.Number, },
}

export default Moveable