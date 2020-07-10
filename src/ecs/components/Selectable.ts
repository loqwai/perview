import { Component, Types } from "ecsy";

export interface SelectableProps {
  selected: boolean;
}

class Selectable extends Component<SelectableProps> {
  selected = false
}

Selectable.schema = {
  x: { type: Types.Number },
  y: { type: Types.Number },
}

export default Selectable