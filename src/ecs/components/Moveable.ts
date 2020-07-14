import { Component, Types } from "ecsy";
import { Vector2Type } from "../types/Vector2";

interface Point {
  x: number;
  y: number;
}

interface Props {
  hasDestination: boolean;
  destination: Point;
  speed: number;
}

class Moveable extends Component<Props> {
  hasDestination = false
  destination: Point = { x: 0, y: 0 }
  speed = 100
}

Moveable.schema = {
  hasDestination: { type: Types.Boolean },
  destination: { type: Vector2Type, },
  speed: { type: Types.Number, },
}

export default Moveable