import { Component, Types } from "ecsy";

class Attack extends Component<Attack> {
  projectileColor: string = '#000000';
  projectileSpeed: number = 0;
  projectileLifetime: number = 0;
  projectileDamage: number = 0;
  minimumRefactoryPeriod: number = 0; 
  lastAttack: number = 0;
}

Attack.schema = {
  projectileColor: { type: Types.String },
  projectileSpeed: { type: Types.Number },
  projectileLifetime: { type: Types.Number },
  projectileDamage: { type: Types.Number },
  minimumRefactoryPeriod: { type: Types.Number },
  lastAttack: { type: Types.Number },
}

export default Attack