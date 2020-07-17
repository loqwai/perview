import { Component, Types } from "ecsy";

class DoesDamage extends Component<DoesDamage> {
  damage: number = 0;
}

DoesDamage.schema = {
  damage: { type: Types.Number },
}

export default DoesDamage