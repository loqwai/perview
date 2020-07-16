import { System, Entity } from "ecsy";

import Circle from "../components/Circle";
import Moveable from "../components/Moveable";

import positionsAreClose from "../utils/positionsAreClose";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Destination from "../components/Destination";
import Collidable from "../components/Collidable";

class Stopper extends System {
  execute(_delta: number, _time: number): void {
    this.queries.moveables.results.forEach(this.stopIfColliding)
    this.queries.withDestination.results.forEach(this.stopIfAtDestination)
  }

  private stopIfAtDestination = (entity: Entity) => {
    const { position } = entity.getComponent(Circle)
    const { position: destination } = entity.getComponent(Destination)

    if (positionsAreClose(position, destination, 1)) {
      entity.getMutableComponent(Moveable).speed = 0
      entity.removeComponent(Destination)
    }
  }

  private stopIfColliding = (entity: Entity) => {
    const { radius, position } = entity.getComponent(Circle)
    const isDestroyedOnImpact = !!entity.getComponent(DestroyedOnImpact)

    this.queries.collideables.results.forEach(otherEntity => {
      if (entity === otherEntity) return;

      const other = otherEntity.getComponent(Circle)
      const threshold = radius + other.radius

      const isClose = positionsAreClose(position, other.position, threshold)

      if (isClose) {
        entity.getMutableComponent(Moveable).speed = 0
      }
      if (isClose && isDestroyedOnImpact) {
        entity.remove()
      }
    })
  }
}

Stopper.queries = {
  collideables: { components: [ Circle, Collidable ]},
  moveables: { components: [ Circle, Moveable ] },
  withDestination: { components: [ Circle, Destination, Moveable ] },
}

export default Stopper