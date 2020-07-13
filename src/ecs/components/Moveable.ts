import { Component, Types } from "ecsy";

interface MoveableProps {
  hasDestination: boolean;
  destinationX: number;
  destinationY: number;
  speed: number;
}

class Moveable extends Component<MoveableProps> {
  hasDestination = false
  destinationX = 0
  destinationY = 0
  speed = 100
}

Moveable.schema = {
  hasDestination: { type: Types.Boolean },
  destinationX: { type: Types.Number, },
  destinationY: { type: Types.Number, },
  speed: { type: Types.Number, },
}

export default Moveable