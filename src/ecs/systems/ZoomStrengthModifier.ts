import { System } from "ecsy";

import Attack from "../components/Attack";
import Camera from "../components/Camera";
import Team from "../components/Team";

class ZoomStrengthModifier extends System {
  execute(delta: number, time: number): void {
    const cameraTeam = this.cameraTeam();
    const cameraScale = this.cameraScale();

    this.queries.attackers.results.forEach(attacker => {
      if (attacker.getComponent(Team).name !== cameraTeam) return;

      const attack = attacker.getMutableComponent(Attack)
      attack.projectileDamage = attack.projectileDamageOriginal * cameraScale
    })
  }

  private camera = () => this.queries.cameras.results[0]
  private cameraScale = () => this.camera().getComponent(Camera).zoom
  private cameraTeam = () => this.camera().getComponent(Team).name
}

ZoomStrengthModifier.queries = {
  cameras: { components: [Camera, Team] },
  attackers: { components: [Attack, Team] },
}

export default ZoomStrengthModifier