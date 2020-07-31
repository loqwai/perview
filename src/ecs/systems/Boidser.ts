import { System, Entity } from "ecsy"
import * as R from 'ramda'

import Moveable from "../components/Moveable"
import Position from "../components/Position"
import Team from "../components/Team"
import Vector2 from "../types/Vector2"
import Destination from "../components/Destination"
import DebugVector from "../components/DebugVector"

class Boidser extends System {
  execute(_delta: number, _time: number): void {
    this.queries.entities.results.forEach(this.executeEntity)
  }

  executeEntity = (entity: Entity) => {
    const { position } = entity.getComponent(Position)
    const { direction, maxSpeed } = entity.getMutableComponent(Moveable)
    const teammates = this.getTeammates(entity)

    const destinationForce = this.calcDestinationForce(entity)
    const separationForce = this.calcSeparationForce(50, entity, teammates)
    const cohesionForce = this.calcCohesionForce(entity, teammates)
    const alignmentForce = this.calcAlignmentForce(entity, teammates)

    direction.set(0, 0)
             .addMut(destinationForce)
             .addMut(separationForce)
             .addMut(cohesionForce.divideScalarMut(1000))
             .addMut(alignmentForce.multiplyScalarMut(10))
             .limitMut(maxSpeed)

    this.world.createEntity()
              .addComponent(DebugVector, { color: '#f00', position, direction })

    if (Number.isNaN(direction.x) || Number.isNaN(direction.y)) {
      throw new Error('divided.x was NaN');
    }
  }

  private calcAlignmentForce = (entity: Entity, entities: Entity[]) => {
    const force = new Vector2(0, 0)
    const { position } = entity.getComponent(Position)

    entities.forEach(e => {
      const { position: p } = e.getComponent(Position)
      const { direction: d } = e.getComponent(Moveable)
      const distance = position.subtract(p).magnitude()
      const f = d.divideScalar(distance)
      force.addMut(f)
    })

    if (R.isEmpty(entities)) return force
    return force.divideScalarMut(entities.length)
  }

  private calcAveragePosition = (entities: Entity[]) => {
    const positions = entities.map(e => e.getComponent(Position).position)
    const sumPositions = new Vector2(0, 0)
    positions.forEach(sumPositions.addMut)

    if (R.isEmpty(positions)) return sumPositions
    return sumPositions.divideScalarMut(positions.length)
  }

  private calcCohesionForce = (entity: Entity, teammates: Entity[]) => {
    const { position } = entity.getComponent(Position)
    const averagePosition = this.calcAveragePosition(teammates)

    return averagePosition.subtractMut(position)
  }

  private calcDestinationForce = (entity: Entity) => {
    if (!entity.hasComponent(Destination)) return new Vector2(0, 0)

    const { position: destination } =  entity.getComponent(Destination)
    const { position } =  entity.getComponent(Position)
    return destination.subtract(position)
  }

  private calcSeparationForce = (multiplier: number, entity: Entity, teammates: Entity[]) => {
    const vector = new Vector2(0, 0)
    const forces = R.map(this.calcSingleSeparationForce(multiplier)(entity), teammates)

    const { position } = entity.getComponent(Position)
    forces.forEach(force => {
      this.world.createEntity().addComponent(DebugVector, { color: 'rgba(0, 255, 0, 0.05)', position, direction: force})
    })


    forces.forEach(vector.addMut)

    if (R.isEmpty(forces)) return vector;

    return vector.divideScalar(forces.length)
  }

  private calcSingleSeparationForce = R.curry((multiplier: number, entity: Entity, other: Entity) => {
    const { position } = entity.getComponent(Position)
    const { position: otherPosition } = other.getComponent(Position)
    const { minSeparation, separation } = entity.getComponent(Moveable)

    const vector = position.subtract(otherPosition)
    const allowedDistance = otherPosition.subtract(position)
                                         .limitMut(minSeparation)
                                         .addMut(position)
                                         .subtractMut(otherPosition)
                                         .magnitude()
    const distance = vector.magnitude()

    if (separation < allowedDistance) return vector.multiplyScalarMut(0)
    if (allowedDistance === 0 || distance < minSeparation) {
      return vector.multiplyScalarMut(Math.pow(10, 10))
    }

    return vector.divideScalarMut(allowedDistance)
                 .multiplyScalarMut(multiplier)
  })

  private getTeammates = (entity: Entity) => {
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