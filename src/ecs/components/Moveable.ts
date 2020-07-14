import { Component, Types } from "ecsy";
import PointType from "../types/PointType";

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
  destination: { type: PointType, },
  speed: { type: Types.Number, },
}

export default Moveable