import { Component, Types } from "ecsy";

interface Props {
  x: number;
  y: number;
}

class Position extends Component<Props> {
  x: number = 0
  y: number = 0
}

Position.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
}

export default Position