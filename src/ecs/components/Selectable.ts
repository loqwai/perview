import { Component, Types } from "ecsy";

class Selectable extends Component<Selectable> {
  selected: boolean = false
}

Selectable.schema = {
  selected: { type: Types.Boolean },
}

export default Selectable