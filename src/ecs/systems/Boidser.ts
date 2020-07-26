import { System, Entity } from "ecsy"
import * as R from 'ramda'

import Moveable from "../components/Moveable"
import Position from "../components/Position"
import Team from "../components/Team"
import Vector2 from "../types/Vector2"
import Destination from "../components/Destination"

class Boidser extends System {
  execute(_delta: number, _time: number): void {
    this.queries.entities.results.forEach(this.executeEntity)
  }

  executeEntity = (entity: Entity) => {
    const { direction, maxSpeed } = entity.getMutableComponent(Moveable)
    const teammates = this.getTeammates(entity)

    const destinationForce = this.calcDestinationForce(entity)
    const separationForce = this.calcSeparationForce(entity, teammates)
    const cohesionForce = this.calcCohesionForce(entity, teammates)

    direction.set(0, 0)
             .addMut(destinationForce)
             .addMut(separationForce.multiplyScalarMut(50))
             .addMut(cohesionForce.divideScalarMut(1000))

    const speed = direction.magnitude()
    if (maxSpeed < speed) {
      direction.divideScalarMut(speed / maxSpeed)
    }
  }

  calcDestinationForce = (entity: Entity) => {
    if (!entity.hasComponent(Destination)) return new Vector2(0, 0)

    const { position: destination } =  entity.getComponent(Destination)
    const { position } =  entity.getComponent(Position)
    return destination.subtract(position)
  }

  calcCohesionForce = (entity: Entity, teammates: Entity[]) => {
    const { position } = entity.getComponent(Position)
    const averagePosition = this.calcAveragePosition(teammates)

    return averagePosition.subtractMut(position)
  }

  calcAveragePosition = (entities: Entity[]) => {
    const positions = entities.map(e => e.getComponent(Position).position)
    const sumPositions = new Vector2(0, 0)
    positions.forEach(sumPositions.addMut)

    if (R.isEmpty(positions)) return sumPositions
    return sumPositions.divideScalarMut(positions.length)
  }

  calcSeparationForce = (entity: Entity, teammates: Entity[]) => {
    const vector = new Vector2(0, 0)
    const forces = R.map(this.calcSingleSeparationForce(entity), teammates)

    forces.forEach(vector.addMut)

    if (R.isEmpty(forces)) return vector;

    const divided = vector.divideScalar(forces.length)
    const unit = divided.unit()
    // vector.divideScalarMut(forces.length).unitMut()
    if (Number.isNaN(divided.x)) throw new Error('divided.x was NaN')
    if (Number.isNaN(unit.x)) throw new Error('unit.x was NaN')
    return unit
  }

  calcSingleSeparationForce = R.curry((entity: Entity, other: Entity) => {
    const { position } = entity.getComponent(Position)
    const { position: otherPosition } = other.getComponent(Position)
    const { minSeparation } = entity.getComponent(Moveable)

    const vector = position.subtract(otherPosition)
    const distance = vector.magnitude()

    if (minSeparation < distance) return vector.multiplyScalar(0)

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