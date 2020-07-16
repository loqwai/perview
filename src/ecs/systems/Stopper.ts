import { System, Entity } from "ecsy";
import Moveable from "../components/Moveable";
import Circle from "../components/Circle";
import positionsAreClose from "../utils/positionsAreClose";

class Stopper extends System {
  execute(_delta: number, _time: number): void {
    this.queries.moveables.results.forEach(this.stopIfColliding)
  }

  private stopIfColliding = (entity: Entity) => {
    const { radius, position } = entity.getComponent(Circle)

    this.queries.moveables.results.forEach(otherEntity => {
      if (entity === otherEntity) return;

      const other = otherEntity.getComponent(Circle)
      const threshold = radius + other.radius

      if (positionsAreClose(position, other.position, threshold)) {
        entity.getMutableComponent(Moveable).hasDestination = false
      }
    })
  }
}

Stopper.queries = {
  moveables: { components: [ Moveable, Circle ] },
}

export default Stopper