import { Component, Types } from "ecsy";

class Health extends Component<Health> {
  maxHealth: number = 0;
  health: number = 0;
}

Health.schema = {
  maxHealth: { type: Types.Number },
  health: { type: Types.Number },
}

export default Health