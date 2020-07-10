import { Component, Types } from "ecsy";

export interface PositionProps {
  x: number,
  y: number,
}

class Position extends Component<PositionProps> {}

Position.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
}

export default Position