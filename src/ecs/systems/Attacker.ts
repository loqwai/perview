import { System, Entity } from "ecsy";
import * as R from 'ramda'

import Team from '../components/Team'
import Attack from "../components/Attack";
import Circle from "../components/Circle";
import Moveable from "../components/Moveable";
import distanceBetween from "../utils/distanceBetween";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Lifespan from "../components/Lifespan";
import DoesDamage from "../components/DoesDamage";
import Position from "../components/Position";

class Attacker extends System {
  execute(_delta: number, time: number): void {
    this.queries.attackers.results.forEach(attacker => {
      const attack = attacker.getComponent(Attack)

      if (time < attack.lastAttack + attack.minimumRefactoryPeriod) {
        return;
      }

      const target = this.closestTarget(attacker)

      if (target) this.attackTarget(time, attacker, target);
    })
  }

  private closestTarget = (attacker: Entity) => {
    const { position } = attacker.getComponent(Position)
    const team = attacker.getComponent(Team)

    const targets = this.queries.targets.results.filter(entity => team.name !== entity.getComponent(Team).name)
    const sortedTargets = R.sortBy(target => {
      const { position: targetPosition } = target.getComponent(Position)
      return distanceBetween(position, targetPosition)
    }, targets)

    return sortedTargets[0]
  }

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
}

Attacker.queries = {
  attackers: { components: [Attack, Circle, Position, Team] },
  targets: { components: [Position, Team] },
}

export default Attacker