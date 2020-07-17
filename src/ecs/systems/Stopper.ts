import { System, Entity } from "ecsy";
import * as R from 'ramda'

import Circle from "../components/Circle";
import Moveable from "../components/Moveable";

import positionsAreClose from "../utils/positionsAreClose";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Destination from "../components/Destination";
import Collidable from "../components/Collidable";
import DoesDamage from "../components/DoesDamage";
import Health from "../components/Health";
import Position from "../components/Position";

const isCloseTo = R.curry((e1: Entity, e2: Entity) => {
  if (e1 === e2) return false;

  const c1 = e1.getComponent(Circle)
  const p1 = e1.getComponent(Position)
  const c2 = e2.getComponent(Circle)
  const p2 = e2.getComponent(Position)
  const threshold = c1.radius + c2.radius

  return positionsAreClose(p1.position, p2.position, threshold)
})

class Stopper extends System {
  execute(_delta: number, _time: number): void {
    this.queries.moveables.results.forEach(this.stopIfColliding)
    this.queries.withDestination.results.forEach(this.stopIfAtDestination)
  }

  private stopIfAtDestination = (entity: Entity) => {
    const { position } = entity.getComponent(Position)
    const { position: destination } = entity.getComponent(Destination)

    if (positionsAreClose(position, destination, 1)) {
      entity.getMutableComponent(Moveable).direction.set(0, 0)
      entity.removeComponent(Destination)
    }
  }

  private stopIfColliding = (entity: Entity) => {
    const other = R.find(isCloseTo(entity), this.queries.collideables.results)

    if (R.isNil(other)) return

    entity.getMutableComponent(Moveable).speed = 0

    if (entity.hasComponent(DoesDamage) && other.hasComponent(Health)) {
      const { damage } = entity.getComponent(DoesDamage)
      other.getMutableComponent(Health).health -= damage
    }

    if (entity.hasComponent(DestroyedOnImpact)) {
      entity.remove()
    }
  }
}

Stopper.queries = {
  collideables: { components: [ Circle, Collidable, Position ]},
  moveables: { components: [ Circle, Moveable, Position ] },
  withDestination: { components: [ Destination, Moveable, Position ] },
}

export default Stopper