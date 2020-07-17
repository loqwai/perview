import { System, Entity } from "ecsy";
import * as R from 'ramda'

import Team from '../components/Team'
import Attack from "../components/Attack";
import Circle from "../components/Circle";
import unitVector from "../utils/unitVector";
import Vector2 from "../types/Vector2";
import Moveable from "../components/Moveable";
import distanceBetween from "../utils/distanceBetween";
import DestroyedOnImpact from "../components/DestroyedOnImpact";
import Lifespan from "../components/Lifespan";

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
    const { position } = attacker.getComponent(Circle)
    const team = attacker.getComponent(Team)

    const targets = this.queries.targets.results.filter(entity => team.name !== entity.getComponent(Team).name)
    const sortedTargets = R.sortBy(target => {
      const { position: targetPosition } = target.getComponent(Circle)
      return distanceBetween(position, targetPosition)
    }, targets)

    return sortedTargets[0]
  }

  private attackTarget = (time: number, attacker: Entity, target: Entity) => {
    const attack = attacker.getMutableComponent(Attack)
    attack.lastAttack = time

    const { radius, position } = attacker.getComponent(Circle)
    const { position: targetPosition } = target.getComponent(Circle)

    const direction = unitVector({
      x: targetPosition.x - position.x,
      y: targetPosition.y - position.y,
    })

    const spawnPosition = new Vector2(
      position.x + (direction.x * (radius + 3)),
      position.y + (direction.y * (radius + 3)),
    )

    this.world.createEntity()
      .addComponent(Circle, { color: attack.projectileColor, radius: 2, position: spawnPosition })
      .addComponent(DestroyedOnImpact)
      .addComponent(Moveable, { speed: attack.projectileSpeed, direction })
      .addComponent(Lifespan, { createdAt: time, ttl: attack.projectileLifetime })
  }
}

Attacker.queries = {
  attackers: { components: [Attack, Circle, Team] },
  targets: { components: [Circle, Team] },
}

export default Attacker