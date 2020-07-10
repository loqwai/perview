import { Component, Types } from "ecsy";

export interface SelectableProps {
  selected: boolean;
}

class Selectable extends Component<SelectableProps> {
  selected: boolean = false

  toggle = () => {
    this.selected = !this.selected
  }
}

Selectable.schema = {
  selected: { type: Types.Boolean },
}

export default Selectable