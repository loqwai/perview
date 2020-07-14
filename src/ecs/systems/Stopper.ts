import { System, Entity } from "ecsy";
import Moveable from "../components/Moveable";
import Circle from "../components/Circle";
import positionsAreClose from "../utils/positionsAreClose";

class Stopper extends System {
  execute(_delta: number, _time: number): void {
    this.queries.moveables.results.forEach(this.stopIfColliding)
  }

  private stopIfColliding = (entity: Entity) => {
    const { position } = entity.getComponent(Circle)

    this.queries.moveables.results.forEach(other => {
      if (entity === other) return;

      const otherPosition = other.getComponent(Circle).position

      if (positionsAreClose(position, otherPosition, 20)) {
        entity.getMutableComponent(Moveable).hasDestination = false
      }
    })
  }
}

Stopper.queries = {
  moveables: { components: [ Moveable, Circle ] },
}

export default Stopper