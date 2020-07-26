import { System, Entity } from "ecsy";
import * as R from 'ramda'

import Team from '../components/Team'
import Attack from "../components/Attack";
import Circle from "../components/Circle";
import Moveable from "../components/Moveable";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Lifespan from "../components/Lifespan";
import DoesDamage from "../components/DoesDamage";
import Position from "../components/Position";
import DebugVector from "../components/DebugVector";
import Vector2 from "../types/Vector2";

class Attacker extends System {
  execute(_delta: number, time: number): void {
    this.queries.attackers.results.forEach(attacker => {
      const attack = attacker.getComponent(Attack)

      if (time < attack.lastAttack + attack.minimumRefactoryPeriod) {
        return;
      }

      const target = this.closestUnObstructedTarget(attacker)

      if (target) this.attackTarget(time, attacker, target);
    })
  }

  private closestUnObstructedTarget = (attacker: Entity) => {
    const { position } = attacker.getComponent(Position)
    const team = attacker.getComponent(Team)

    const targets = this.queries.targets.results.filter(entity => team.name !== entity.getComponent(Team).name)
    const teammates = this.getTeammates(attacker)
    const targetsInRange = targets.filter(target => this.inRange(attacker, target))
    const unObstructedTargets = targetsInRange.filter(target => !this.isObstructed(attacker, target, teammates))

    const sortedTargets = R.sortBy(target => {
      const { position: targetPosition } = target.getComponent(Position)
      const vector = targetPosition.subtract(position)
      return vector.magnitude()
    }, unObstructedTargets)

    return sortedTargets[0]
  }

  private inRange = (attacker: Entity, target: Entity) => {
    const { position } = attacker.getComponent(Position)
    const { position: otherPosition } = target.getComponent(Position)
    const { projectileSpeed, projectileLifetime } = attacker.getComponent(Attack)
    const maxDistance = (projectileSpeed * projectileLifetime) / 1000
    const distance = otherPosition.subtract(position).magnitude()

    return distance <= maxDistance
  }

  private isObstructed = (attacker: Entity, target: Entity, teammates: Entity[]) => {
    const others = R.without([attacker], teammates)
    return R.any(this.inTheWayOfTarget(attacker)(target), others)
  }

  private dv = (position: Vector2, direction: Vector2, color: string) => {
    this.world.createEntity().addComponent(DebugVector, {
      color,
      position,
      direction,
    })
  }

  private inTheWayOfTarget = R.curry((attacker: Entity, target: Entity, other: Entity) => {
    const { position: p1 } = attacker.getComponent(Position)
    const { position: p2 } = target.getComponent(Position)

    const { position: { x: cx, y: cy } } =  other.getComponent(Position)
    const { radius } = other.getComponent(Circle)

    const { x: dx, y: dy } = p2.subtract(p1)

    const A = (dx * dx) + (dy * dy)
    const rx = dx * (p1.x - cx)
    const ry = dy * (p1.y - cy)
    const B = 2 * (rx + ry)
    const C = ((p1.x - cx) * (p1.x - cx)) + ((p1.y - cy) * (p1.y - cy)) - (radius * radius)

    const d = (B * B) - (4 * A * C)

    return 0 <= d
  })

  private attackTarget = (time: number, attacker: Entity, target: Entity) => {
    const attack = attacker.getMutableComponent(Attack)
    attack.lastAttack = time

    const { radius } = attacker.getComponent(Circle)
    const { position } = attacker.getComponent(Position)
    const { position: targetPosition } = target.getComponent(Position)

    const direction = targetPosition.subtract(position).unitMut().multiplyScalarMut(attack.projectileSpeed)
    const spawnPosition = direction.unit().multiplyScalarMut(radius + 3).addMut(position)

    this.world.createEntity()
      .addComponent(Circle, { color: attack.projectileColor, radius: 2 })
      .addComponent(DoesDamage, { damage: attack.projectileDamage })
      .addComponent(DestroyedOnImpact)
      .addComponent(Moveable, { maxSpeed: attack.projectileSpeed, direction })
      .addComponent(Position, { position: spawnPosition })
      .addComponent(Lifespan, { createdAt: time, ttl: attack.projectileLifetime })
  }

  private getTeammates = (entity: Entity) => {
    const { name } = entity.getComponent(Team)
    const others = R.without([entity], this.queries.attackers.results)

    return others.filter(entity => name === entity.getComponent(Team).name)
  }
}

Attacker.queries = {
  attackers: { components: [Attack, Circle, Position, Team] },
  targets: { components: [Position, Team, Circle] },
}

export default Attacker