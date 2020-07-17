import { System, Entity } from "ecsy";
import * as R from 'ramda'

import Circle from "../components/Circle";
import Moveable from "../components/Moveable";

import positionsAreClose from "../utils/positionsAreClose";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Destination from "../components/Destination";
import Collidable from "../components/Collidable";

const isCloseTo = R.curry((e1: Entity, e2: Entity) => {
  if (e1 === e2) return false;

  const c1 = e1.getComponent(Circle)
  const c2 = e2.getComponent(Circle)
  const threshold = c1.radius + c2.radius

  return positionsAreClose(c1.position, c2.position, threshold)
})

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
    const isCollision = R.any(isCloseTo(entity), this.queries.collideables.results)

    if (isCollision) {
      entity.getMutableComponent(Moveable).speed = 0
    }
    if (isCollision && entity.hasComponent(DestroyedOnImpact)) {
      entity.remove()
    }
  }
}

Stopper.queries = {
  collideables: { components: [ Circle, Collidable ]},
  moveables: { components: [ Circle, Moveable ] },
  withDestination: { components: [ Circle, Destination, Moveable ] },
}

export default Stopper