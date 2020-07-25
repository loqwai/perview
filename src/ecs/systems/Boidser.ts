import { System, Entity } from "ecsy"
import * as R from 'ramda'

import Moveable from "../components/Moveable"
import Position from "../components/Position"
import Team from "../components/Team"
import Vector2 from "../types/Vector2"

class Boidser extends System {
  execute(_delta: number, _time: number): void {
    this.queries.entities.results.forEach(this.executeEntity)
  }

  executeEntity = (entity: Entity) => {
    const { direction, maxSpeed } = entity.getMutableComponent(Moveable)
    const teammates = this.getTeammates(entity)

    const separatingForce = this.calcSeparatingForce(entity, teammates)

    direction.addMut(separatingForce).unitMut().multiplyScalarMut(maxSpeed)
  }

  calcSeparatingForce = (entity: Entity, teammates: Entity[]) => {
    const vector = new Vector2(0, 0)
    const forces = R.map(this.calcSingleSeparatingForce(entity), teammates)

    forces.forEach(vector.addMut)

    if (R.isEmpty(forces)) return vector;

    const divided = vector.divideScalar(forces.length)
    const unit = divided.unit()
    // vector.divideScalarMut(forces.length).unitMut()
    if (Number.isNaN(divided.x)) throw new Error('divided.x was NaN')
    if (Number.isNaN(unit.x)) throw new Error('unit.x was NaN')
    return unit
  }

  calcSingleSeparatingForce = R.curry((entity: Entity, other: Entity) => {
    const { position } = entity.getComponent(Position)
    const { position: otherPosition } = other.getComponent(Position)
    const { minSeparation } = entity.getComponent(Moveable)

    const vector = position.subtract(otherPosition)
    const distance = vector.magnitude()

    if (distance > minSeparation) return vector.multiplyScalar(0)

    return vector.divideScalarMut(distance)
  })

  getTeammates = (entity: Entity) => {
    const { name } = entity.getComponent(Team)
    const others = R.without([entity], this.queries.entities.results)

    return others.filter(entity => name === entity.getComponent(Team).name)
  }
}

Boidser.queries = {
  entities: {
    components: [Moveable, Position, Team]
  }
}

export default Boidser