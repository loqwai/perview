import { Component, Types } from "ecsy";

interface PositionProps {
  x: number,
  y: number,
}

class Position extends Component<PositionProps> {
  x = 0
  y = 0
}

Position.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
}

export default Position